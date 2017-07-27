function reducer(state,action){
	switch (action.type){
		case "CHANGE_MENU":
			return Object.assign({},state,{
				isShowChild:!(state.isShowChild)
			});
			
		case "CHANGE_TITLE":
			return Object.assign({},state,{
				title:action.title
			});	
		
		case "LUN_ARR":
			return Object.assign({},state,{
				lunArr:action.lunArr
			});
		
		case "NOW_ARR":
			return Object.assign({},state,{
				nowArr:action.nowArr
			});
		
		case "WILL_ARR":
			return Object.assign({},state,{
				willArr:action.willArr
			});
			
		case "HOTING_ARR":
			return Object.assign({},state,{
				hotingArr:state.hotingArr.concat(action.hotingArr)
			});
			
		case "COMMING_ARR":
			return Object.assign({},state,{
				commingArr:action.commingArr
			});
			
		case "CINEMA":
			return Object.assign({},state,{
				cinemaArr:action.cinemaArr,
				title:action.title
			});
		
		case "DETAIL":
			var detailobj={};
			detailobj.origin=action.detailobj.cover.origin;
			detailobj.director=action.detailobj.director;
			detailobj.nation=action.detailobj.nation;
			detailobj.language=action.detailobj.language;
			detailobj.category=action.detailobj.category;
			detailobj.premiereAt=action.detailobj.premiereAt;
			detailobj.synopsis=action.detailobj.synopsis;
			return Object.assign({},state,{
				detailobj:detailobj,
				actors:action.detailobj.actors,
				title:action.detailobj.name
			});
		
		default:
			return state;
	}
}

export default reducer;