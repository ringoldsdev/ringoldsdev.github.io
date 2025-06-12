const primaryColorScheme = "light"; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem("theme");

console.log("Current theme:", currentTheme);

function getPreferTheme() {
	// return theme value in local storage if it is set
	if (currentTheme) return currentTheme;

	// return primary color scheme if it is set
	if (primaryColorScheme) return primaryColorScheme;

	// return user device's prefer color scheme
	return window.matchMedia("(prefers-color-scheme: dark)").matches
		? "dark"
		: "light";
}

let themeValue = getPreferTheme();

document.body.classList.add(themeValue);

function setPreference() {
	localStorage.setItem("theme", themeValue);
}

window.onload = () => {
	// now this script can find and listen for clicks on the control
	document.querySelector("#theme-btn")?.addEventListener("click", () => {
		themeValue = themeValue === "light" ? "dark" : "light";
		setPreference();
		// refresh the page to apply the new theme
		window.location.reload();
	});
};
