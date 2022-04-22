function openTabs(evt: Event, id: string) {
  evt.preventDefault();
  const dropdown = document.getElementById(id)!;
  const dropdowns = document.getElementsByClassName("dropdown");
  for (let idx = 0; idx < dropdowns.length; idx++) {
    if (
      dropdown !== dropdowns[idx] &&
      dropdowns[idx].classList.contains("show")
    ) {
      dropdowns[idx].classList.remove("show");
    }
  }
  dropdown.classList.toggle("show");
}

function changeClass(width: number, isCard: boolean, isMedium: boolean) {
  if (width <= 540 && !isMedium) {
    const events = [...document.getElementsByClassName("competitions__event")];
    events.forEach((element, idx) => {
      if (idx !== 0) {
        document.getElementsByClassName("competitions__event")[idx].className =
          "competitions__event event_right";
      }
    });
    const first = document.getElementsByClassName("competitions__event")[0];
    first.className = "competitions__event selected";
  } else if (width > 540 && isMedium) {
    const events = [...document.getElementsByClassName("competitions__event")];
    events.forEach((element, idx) => {
      document.getElementsByClassName("competitions__event")[idx].className =
        "competitions__event";
    });
  }
}

export { openTabs, changeClass };
