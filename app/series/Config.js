define([],
	function ()
	{
		configOptions = {
			//The appid for the configured application
			appid: "",
			//The web map id
			webmaps: [
			{
				id: "6e6043385e824a89af2b6fba8450b656",
				title: ""
			},{
				id: "ecd0f881bfe6467a80252fcf26292f94",
				title: ""
			},{
				id: "25bc81de94f14b58878a0b67d8ddd5eb",
				title: ""
			}],
			//Enter a title, if no title is specified, the webmap's title is used.
			title: "Interactive: Mapping Renewable Energy Around the World",
			//Enter a subtitle, if not specified the ArcGIS.com web map's summary is used
			subtitle: "Which countries are leading the way in transitioning away from fossil fuels?",
			//Sync maps scale and location
			syncMaps: true,
			//Display geocoder search widget
			geocoderWidget: true,
			// Specify a proxy for custom deployment
			proxyurl: "",
			//specify the url to a geometry service
			geometryserviceurl: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",
			//Modify this to point to your sharing service URL if you are using the portal
			sharingurl: "http://www.arcgis.com/sharing/rest/content/items"
		}
	}
);
