import { GroupPlayer, Pair } from "@/types/competitions/competition-interfaces";

function setTotalPoints(groups: GroupPlayer[][]) {
  console.log("groups before");
  groups.forEach((group) => {
    group.forEach((_, idx) => {
      group[idx].totalPoints = group[idx].winPoints * 2 + group[idx].losePoints;
      group[idx].koef =
        group[idx].losePoints === 0
          ? group[idx].winPoints
          : group[idx].winPoints / group[idx].losePoints;
    });
  });
  groups;
  console.log("groups after", groups);
  return groups;
  // iduser
}

function getRandomIdx(arr: any) {
  return Math.floor(Math.random() * arr.length);
}

function setPlaces(groupsPlayers: GroupPlayer[][], groups: Pair[][]) {
  const newGroupsPlayers: GroupPlayer[][] = [];
  groupsPlayers.forEach((group) => {
    const oneGroup = [...group];
    oneGroup.sort((a, b) => {
      if (a.totalPoints > b.totalPoints) {
        return -1;
      } else if (a.totalPoints < b.totalPoints) {
        return 1;
      }
      return 0;
    });
    // for (let i = 0; i < oneGroup.length; i++) {
    //   for (let j = oneGroup.length - 1; j > i; j--) {
    //     if (oneGroup[j - 1].totalPoints > oneGroup[j].totalPoints) {
    //       const tmp = oneGroup[j - 1];
    //       oneGroup[j - 1] = oneGroup[j];
    //       oneGroup[j] = tmp;
    //     }
    //   }
    // }
    newGroupsPlayers.push(oneGroup);
  });
  console.log("LETS GOOOO");
  newGroupsPlayers.forEach((group) => {
    for (let i = 1; i < group.length; i++) {
      if (group[i - 1].totalPoints === group[i].totalPoints) {
        const startGroupIdx = i - 1;
        const equalTotals: GroupPlayer[] = [group[startGroupIdx]];
        for (let j = i; j < group.length; j++) {
          // ADD IF IT'S THE LAST ELEMENT
          if (
            group[j].totalPoints !== group[i].totalPoints ||
            j === group.length - 1
          ) {
            if (
              group[j].totalPoints === group[i].totalPoints &&
              j === group.length - 1
            ) {
              equalTotals.push(group[j]);
            }
            equalTotals.sort((a, b) => {
              if (a.koef > b.koef) {
                return -1;
              } else if (a.koef < b.koef) {
                return 1;
              }
              return 0;
            });
            i = j;
            break;
          } else {
            equalTotals.push(group[j]);
          }
        }
        console.log("equalTotals", equalTotals);
        // Another cycle for equal koefs
        const playersGroup = groups[equalTotals[0].groupNumber - 1];
        for (let j = 1; j < equalTotals.length; j++) {
          if (equalTotals[j - 1].koef === equalTotals[j].koef) {
            const startIdx = j - 1;
            const equalKoefs: GroupPlayer[] = [equalTotals[j - 1]];
            // Проходимся по одинаковым коэффициентам
            let k = j;
            for (k; k < equalTotals.length; k++) {
              if (
                equalTotals[k].koef !== equalTotals[j].koef ||
                k === equalTotals.length - 1
              ) {
                if (
                  equalTotals[k].koef === equalTotals[j].koef &&
                  k === equalTotals.length - 1
                ) {
                  equalKoefs.push(equalTotals[k]);
                }
                equalKoefs.sort((a, b) => {
                  if (a.koef > b.koef) {
                    return -1;
                  } else if (a.koef < b.koef) {
                    return 1;
                  }
                  return 0;
                });
                break;
              } else {
                equalKoefs.push(equalTotals[k]);
              }
            }
            j = k;
            // Сравниваем попарно
            console.log("equalKoefs1", equalKoefs);
            for (let k = 0; k < equalKoefs.length; k++) {
              for (let l = 0; l < equalKoefs.length; l++) {
                const pair = playersGroup.find(
                  (pgroup) =>
                    (pgroup.user1.id === equalKoefs[k].id &&
                      pgroup.user2.id === equalKoefs[l].id) ||
                    (pgroup.user1.id === equalKoefs[l].id &&
                      pgroup.user2.id === equalKoefs[k].id)
                );
                console.log("pair", pair);
                if (
                  pair &&
                  pair.user1.id === equalKoefs[k].id &&
                  pair.score[0] > pair.score[2]
                ) {
                  equalKoefs[k].koef += 0.000001;
                } else if (
                  pair &&
                  pair.user2.id === equalKoefs[k].id &&
                  pair.score[0] < pair.score[2]
                ) {
                  equalKoefs[k].koef += 0.000001;
                }
              }
            }
            equalKoefs.sort((a, b) => {
              if (a.koef > b.koef) {
                return -1;
              } else if (a.koef < b.koef) {
                return 1;
              }
              return 0;
            });
            console.log("equalKoefs2", equalKoefs);
            // Если вдруг всё равно одинаковые есть, то рандомим
            for (let k = 1; k < equalKoefs.length; k++) {
              const startKoefsIdx = k - 1;
              if (equalKoefs[k - 1].koef === equalKoefs[k].koef) {
                let equalKoefsToRandom: GroupPlayer[] = [equalKoefs[k - 1]];
                let l = k;
                for (l; l < equalKoefs.length; l++) {
                  if (
                    equalKoefs[l].koef !== equalKoefs[j].koef ||
                    l === equalKoefs.length - 1
                  ) {
                    if (
                      equalKoefs[l].koef === equalKoefs[j].koef &&
                      l === equalKoefs.length - 1
                    ) {
                      equalKoefsToRandom.push(equalKoefs[l]);
                    }
                    const randomArray = [];
                    let tmpArray = [...equalKoefsToRandom];
                    for (let m = 0; m < equalKoefsToRandom.length; m++) {
                      const randomIdx = getRandomIdx(tmpArray);
                      randomArray.push(equalKoefsToRandom[randomIdx]);
                      tmpArray = tmpArray.filter((_, idx) => idx !== randomIdx);
                    }
                    equalKoefsToRandom = randomArray;
                    break;
                  } else {
                    equalKoefsToRandom.push(equalKoefs[l]);
                  }
                }
                let index = startKoefsIdx;
                for (let m = 0; m < equalKoefsToRandom.length; m++) {
                  equalKoefs[index] = equalKoefsToRandom[m];
                  index++;
                }
                k = l;
              }
            }
            console.log("equalKoefs3", equalKoefs);
            let index = startIdx;
            for (let m = 0; m < equalKoefs.length; m++) {
              equalTotals[index] = equalKoefs[m];
              index++;
            }
          }
          // Возьмём всех из группы
          // (Номер группы возьмём у чувачка)
          // Если он юзер один или юзер два
          // Потом по каждому проходимся отдельно
          // Если он первый юзер, то берём первую цифру счёта
          // Если он второй юзер, то берём вторую цифру счёта
          // Если у него тех луз, то сразу в конец списка
          // Но если техлузов несколько, то они уже по дефолту в конце
          // Техлузы вообще бы отдельно считать
          // Вычеркнуть отовсюду и в самый конец
          // В самом конце их отдельно смотреть (пробегать вот так)
          // Как-то зациклить это дело (проверку коэффициентов)
          // Возможно добавить какую-нить переменную-счётчик
          // Сколько раз прошлись
          // Если равно как с предыдущим результатом цикла
          // То гг, дело сделано, капитан
          // Если больше двух кста, то нарандомить
          // А ещё отсортировывать каждый раз не забыть
        }
        equalTotals.sort((a, b) => {
          if (a.koef > b.koef) {
            return -1;
          } else if (a.koef < b.koef) {
            return 1;
          }
          return 0;
        });
        console.log("equalKoefsAGAIN", equalTotals);

        let index = startGroupIdx;
        for (let k = 0; k < equalTotals.length; k++) {
          group[index] = equalTotals[k];
          console.log("GroupBefore", group[index], index);
          index++;
        }
        console.log("Group", group);
      }
    }
  });
  console.log("Result", newGroupsPlayers);
  groupsPlayers.forEach((group, idx) => {
    group.forEach((player) => {
      const place = newGroupsPlayers[idx].findIndex(
        (gplayer) => gplayer.id === player.id
      );
      player.place = place + 1;
    });
  });
}

export { setTotalPoints, setPlaces };
