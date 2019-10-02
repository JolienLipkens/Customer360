sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.delaware.jl.trac2019.controller.Master", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.delaware.jl.trac2019.view.Master
		 */
		onInit: function () {

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.delaware.jl.trac2019.view.Master
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.delaware.jl.trac2019.view.Master
		 */
			onAfterRendering: function() {
				// Get the model
				// Since we set our oDatamodel as the dfeault model, we do not need to pass a parameter to the getModel()
				var oModel = this.getView().getModel();
				// Do a http Get operation on the ODataModel
				oModel.read("/ZV_ZVT19_CUSTM_JL",{
					// Callback function if service call was succesful
					success: function(oData) {
						console.log(oData);
					},
					// Callback function if service call failed
					error: function(error){
						console.log(error);
					}
				});
		
			},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.delaware.jl.trac2019.view.Master
		 */
		//	onExit: function() {
		//
		//	}

	});

});