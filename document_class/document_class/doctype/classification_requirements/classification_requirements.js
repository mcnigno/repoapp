// Copyright (c) 2018, Quasar PM and contributors
// For license information, please see license.txt

frappe.ui.form.on('Classification Requirements', {
	refresh: function(frm) {
		
		cur_frm.fields_dict["classification_fields"].grid.get_field("sub_discipline").get_query = function(doc){
			console.log(doc);
			console.log(frm.cur_grid.frm.selected_doc.entity_item);
			console.log(cur_frm);
			var project_exist = frm.doc.classification_fields
			console.log(project_exist);
			var i = 0;
			for (i = 0; i < project_exist.length; i++) {
				console.log(project_exist[i].entity_gen);

				if (project_exist[i].entity_gen == "Project") {
					console.log("is a project");
					console.log(project_exist[i].entity_item)
					return {
					
						filters:{
								"parent" : frm.cur_grid.frm.selected_doc.entity_item,
								"project": "Unipetrol"
						}
				} 
			}
				else {
						console.log("not a project");
					}
				
			
			
			
			return {
					
					filters:{
							"parent" : frm.cur_grid.frm.selected_doc.entity_item
					}
			}
			}
			
		}

	}
});
