function setButtonsProperty(idx: number, lastIdx: number) {
  if (idx === 0 && idx === lastIdx) {
    return [true, true];
  } else if (idx === 0) {
    return [true, false];
  } else if (idx === lastIdx) {
    return [false, true];
  }
  return [false, false];
}

function initButtons() {
  const events = [...document.getElementsByClassName("competitions__event")];

  for (let idx = 0; idx < events.length; idx++) {
    if (events[idx].classList.value.includes("selected")) {
      return setButtonsProperty(idx, events.length - 1);
    }
  }
}

function goPrev() {
  const events = [...document.getElementsByClassName("competitions__event")];
  let index = 0;
  let eventsLength = 0;
  for (let idx = 0; idx < events.length; idx++) {
    if (events[idx].classList.value.includes("selected")) {
      if (idx === 0) {
        index = 0;
        eventsLength = events.length - 1;
        break;
      }
      document
        .getElementsByClassName("competitions__event")
        [idx - 1].classList.add("selected");
      document
        .getElementsByClassName("competitions__event")
        [idx - 1].classList.remove("event_left");
      document
        .getElementsByClassName("competitions__event")
        [idx].classList.remove("selected");
      document
        .getElementsByClassName("competitions__event")
        [idx].classList.add("event_right");
      index = idx - 1;
      eventsLength = events.length - 1;
      break;
    }
  }
  return setButtonsProperty(index, eventsLength);
}

function goNext() {
  const events = [...document.getElementsByClassName("competitions__event")];
  let index = 0;
  let eventsLength = 0;

  for (let idx = 0; idx < events.length; idx++) {
    if (events[idx].classList.value.includes("selected")) {
      if (idx === events.length - 1) {
        index = events.length - 1;
        eventsLength = events.length - 1;
        break;
      }
      document
        .getElementsByClassName("competitions__event")
        [idx + 1].classList.add("selected");
      document
        .getElementsByClassName("competitions__event")
        [idx + 1].classList.remove("event_right");
      document
        .getElementsByClassName("competitions__event")
        [idx].classList.remove("selected");
      document
        .getElementsByClassName("competitions__event")
        [idx].classList.add("event_left");
      index = idx + 1;
      eventsLength = events.length - 1;
      break;
    }
  }
  return setButtonsProperty(index, eventsLength);
}

export { setButtonsProperty, initButtons, goPrev, goNext };
