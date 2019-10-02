function initModel() {
<<<<<<< HEAD
	var sUrl = "/sap/opu/odata/sap/ZV_ZVT19_CUSTM_JL_CDS/";
=======
	var sUrl = "/Northwind/V2/Northwind/Northwind.svc/";
>>>>>>> refs/heads/master
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}