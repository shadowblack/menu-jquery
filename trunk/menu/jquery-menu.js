/*
* Pugin jQuery 
* Creado por: Luis Raúl
* Descripcion: Animacion de menus personalizados y cambios de imagen
*/
(function( $ ){


	jQuery.fn.menueimg = function(config){		
		var config_default = 	[{	
									click : {img:[], event : undefined, switch : undefined},
									hover :  {img:Array([],[]),event : undefined, switch : undefined}									
								}];
		var cou_cli = 0,
			cou_hov = 0;
		
		var config = $.extend(true,config,config_default),			
		cou_cli = 0,
		recorrer = function(ini,lim,con){						
			if (ini < lim){				
				++ini;				
			} else {
				ini = 1;
			}			
			eval(con + '=' + ini);
			return ini-1;
		},
		base = function(){
		
		};
		
		this.each(function(i){		    			
				
			// validando datos
			jQuery.each(config[i],function(i,obj){		
				var _type = typeof(obj.img);			
				if(_type != 'object'){				
					if (_type === 'string'){																	
						obj.img = [obj.img];						
					} else {
						jQuery.error("Tipo de dato incorrecto en el argumento para la imagen, en la funcion menueimg");						
					}															
				} 								
			});
			
			var vQuery = jQuery(this);
			var len_img_cli = config[i].click.img.length,
				len_img_hob = config[i].hover.img.length;						
								
			jQuery(vQuery).click(function(){								
				jQuery(this).attr("src",config[i].click.img[recorrer(cou_cli,len_img_cli,'cou_cli')]);					
			});		
		});				
	};
})( jQuery );