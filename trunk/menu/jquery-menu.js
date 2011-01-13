/*
* Pugin jQuery 
* Creado por: Luis Raúl
* Descripcion: Animacion de menus personalizados y cambios de imagen
*/
(function( $ ){


	jQuery.fn.menueimg = function(arr_con){		
		/*var arr_con_default = 	[{	
									click : {img:[], event : undefined, switch : undefined},
									hover :  {img:Array([],[]),event : undefined, switch : undefined}									
								}];*/
		
		var arr_str_val = [];
		for(var i = 0; i < arr_con.length; i++){
			var str_val = "{click : {img:[], event : undefined, switch : undefined},hover :  {img:Array([],[]),event : undefined, switch : undefined}}";
			arr_str_val.push(str_val);
		}
		eval("var arr_con_default = ["+arr_str_val.join(",")+"]");
		
		var cou_cli = 0,
			cou_hov = 0;
		
		var arr_con = $.extend(true,arr_con,arr_con_default);				
		
		var cou_cli = 0;
		
		var recorrer = function(ini,lim,con){						
			if (ini < lim){				
				++ini;				
			} else {
				ini = 1;
			}			
			eval(con + '=' + ini);
			return ini-1;
		}
		
		var odl_ind = undefined,
		base = function(){
		
		};		
				
		
		this.each(function(i){		    						
			
			// validando datos
			jQuery.each(arr_con[i],function(i,obj){		
				var _type = typeof(obj.img);			
				if(_type != 'object'){				
					if (_type === 'string'){																	
						obj.img = [obj.img];						
					} else {
						jQuery.error("Tipo de dato incorrecto en el argumento para la imagen, en la funcion menueimg");						
					}															
				} 								
			});
			
			var vQuery = jQuery(this)/*,
				ele_arr.push(jQuery(vQuery));*/	
				
			var len_img_cli = arr_con[i].click.img.length,
				len_img_hob = arr_con[i].hover.img.length;						
								
			jQuery(vQuery).click(function(){	
				
				jQuery(this).attr("src",arr_con[i].click.img[recorrer(cou_cli,len_img_cli,'cou_cli')]);	
				if (arr_con[i].click.switch != undefined){		
					alert(odl_ind+" "+i);
					if (odl_ind != i && odl_ind != undefined){
						alert("demo");
						var cha_ind = odl_ind; ///hange index
									
						//if (cha_ind != undefined){
						cou_cli = 0;
						alert(arr_con[cha_ind].click.img[arr_con[cha_ind].click.switch]);
						alert(cha_ind);
							jQuery(vQuery[cha_ind]).attr("src",arr_con[cha_ind].click.img[arr_con[cha_ind].click.switch]);
						//}
					}		
					odl_ind = i;
				} 
				
			});		
		});				
	};
})( jQuery );