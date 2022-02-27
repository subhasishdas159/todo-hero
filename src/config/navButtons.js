const navButtons = (path) => {
  switch(path) {
    case '/':
      return {
        classes: "active:bg-info hover:bg-blue-100 text-info hover:text-info active:text-white mobileOnly:hover:bg-white mobileOnly text-info:hover:text-info mobileOnly:focus:bg-blue-300 mobileOnly:active:bg-info mobileOnly:active:text-white",
        onClick: () => {}
      }

  }
}