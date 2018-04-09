module.exports = {
	pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

	siteTitle: "Winter Sage Adventures", // Navigation and Site Title
	siteTitleAlt: "Winter Sage Adventure blog", // Alternative Site title for SEO
	siteUrl: "http://localhost:8000/", // Domain of your site. No trailing slash!
	siteLanguage: "en", // Language Tag on <html> element
	siteLogo: "/logos/logo-600x195.png", // Used for SEO and manifest
	siteDescription: "A blog built by Gatsby using the Emma theme to document my travels",

	copyright: "Copyright © 2018. All rights reserved.", // Copyright in the footer of the site

	// You can translate these three words into your language if you want.
	// They'll be shown on the project page header
	client: "Client",
	date: "Date",
	service: "Service",

	// Date format used in your project header
	// More information here: https://date-fns.org/v1.29.0/docs/format
	dateFormat: "DD.MM.YYYY",

	// Manifest and Progress color
	themeColor: "#3498DB",
	backgroundColor: "#2b2e3c",

	// Settings for typography.js
	headerFontFamily: "Merriweather",
	bodyFontFamily: "Roboto",
	baseFontSize: "16px",
};
