function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZGW_CUST_360_JL_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}