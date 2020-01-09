'use strict';

(function () {
	
	let HandlerFunction = [];

  $(document).ready(function () {
	
    tableau.extensions.initializeAsync().then(function () {
  
	  
	  fetchFilters();
	
	}
	);
  });
  function fetchFilters () {
	  
	  HandlerFunction.forEach(function (unregisterHandlerFunction) {
      unregisterHandlerFunction();
    });
	
      let dataSourceFetchPromises = [];
	  
	  let dataSourceFetchPromises1 = [];
	  
	  let dataSourceFetchPromises2 = [];
	  
	  let dataSourceFetchPromises3 = [];
	  
	  let dataSourceFetchPromises4 = [];

      let dashboardDataSources = {};

	 const markSelection = tableau.TableauEventType.FilterChanged;
	
      const dashboard = tableau.extensions.dashboardContent.dashboard;
	 
	  dashboard.worksheets.forEach(function (worksheet) {
		  if(worksheet.name=="Sheet 27")
		  {
		
        dataSourceFetchPromises.push(worksheet.getSummaryDataAsync());
		
		dataSourceFetchPromises1.push(worksheet.getFiltersAsync());
		
		dataSourceFetchPromises2.push(worksheet.getParametersAsync());
		
	
		
		  }
		  if(worksheet.name=="Sheet 28")
		  {
			  dataSourceFetchPromises3.push(worksheet.getSummaryDataAsync());
			  dataSourceFetchPromises4.push(worksheet.getParametersAsync());
		  }
		  let unregisterHandlerFunction = worksheet.addEventListener(tableau.TableauEventType.FilterChanged, filterChangedHandler);
      HandlerFunction.push(unregisterHandlerFunction);
      });
 
	Promise.all(dataSourceFetchPromises1).then(function (fetchResults) {
        fetchResults.forEach(function (dataSource) {
        dataSource.forEach(function (dataSource1) {
		
			
		});
	  });
      
     
      });
	  
	  
	  Promise.all(dataSourceFetchPromises3).then(function (fetchResults) {
	  fetchResults.forEach(function (dataSource) { 
           
			Promise.all(dataSourceFetchPromises4).then(function (fetchResults3) {
        fetchResults3.forEach(function (dataSource3) {
        dataSource3.forEach(function (dataSource13) {
			
		
			if(dataSource13.name=="Comparison Start Date")
			{
			const date = new Date();
	
			dataSource13.changeValueAsync(dataSource.data[0][1].value);
			}
			if(dataSource13.name=="Comparison End Date")
			{
			const date = new Date();
	
			dataSource13.changeValueAsync(dataSource.data[0][0].value);
			}
			if(dataSource13.name=="cYear")
			{
			const date = new Date();
	
			dataSource13.changeValueAsync(dataSource.data[0][3].value);
			}
			if(dataSource13.name=="cQmw")
			{
			const date = new Date();
	
			dataSource13.changeValueAsync(dataSource.data[0][2].value);
			}
			
		});
	  });
    
      });
	  
	  });
	  });
	  
	  
	  
	  
      Promise.all(dataSourceFetchPromises).then(function (fetchResults) {
        fetchResults.forEach(function (dataSource) {
            
			
			Promise.all(dataSourceFetchPromises2).then(function (fetchResults3) {
        fetchResults3.forEach(function (dataSource3) {
        dataSource3.forEach(function (dataSource13) {
			if(dataSource13.name=="Selected Start Date")
			{
			const date = new Date();
	
			dataSource13.changeValueAsync(dataSource.data[0][1].value);
			}
			if(dataSource13.name=="Selected End Date")
			{
			const date = new Date();
	
			dataSource13.changeValueAsync(dataSource.data[0][0].value);
			}
			
			if(dataSource13.name=="Timeframe")
			{
			const date = new Date();
	
			dataSource13.changeValueAsync(dataSource.data[0][4].value);
			}
			if(dataSource13.name=="Year")
			{
			const date = new Date();
	
			dataSource13.changeValueAsync(dataSource.data[0][3].value);
			}
			if(dataSource13.name=="Qmw")
			{
			const date = new Date();
	
			dataSource13.changeValueAsync(dataSource.data[0][2].value);
			}
			
		});
	  });
      
     
      });
			
			
		
         
	  });
       
     
      });
	  
      
	  }
  
  function filterChangedHandler (filterEvent) {
   
    fetchFilters();
  }




  
  

  
  

  

})(); 