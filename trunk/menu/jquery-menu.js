/*
* Pugin jQuery 
* Creado por: Luis Raúl
* Descripcion: Animacion de menus personalizados y cambios de imagen
*/
(function( $ ){


	jQuery.fn.menueimg = function(config){
	
		var config_default = 	{	
									click : {img:[], event : undefined},
									hover :  {img:Array([],[]),event : undefined}									
								};
		var cou_cli = 0,
			cou_hov = 0;
		
		var config = $.extend(true,config,config_default);		
	
		console.debug(config);
			alert("adfad");
		// validando datos entrantes en imagenes
		jQuery.each(config,function(i,obj){		
			_type = typeof(obj.img);			
			if(_type != 'object'){				
				if (_type === 'string'){																	
					obj.img = [obj.img];						
				} else {
					$.error("Tipo de dato incorrecto en el argumento para la imagen, en la funcion menueimg");						
				}							
				console.debug(typeof(_type));				
			} 								
		});		

		/*
		* recorriendo areglo de imagenes, retorna un valor puro para el array y manipula el contador, aunque esta declarada en 0,  el contador comienza en  1
		*/
		
		
		return this.each(function(){
			var cou_cli = 0;
			recorrer = function(ini,lim,con){		
				alert(ini+' '+lim);
				if (ini < lim){				
					++ini;				
				} else {
					ini = 1;
				}			
				eval(con + '=' + ini);
				return ini-1;
			}			
					
			var vQuery = jQuery(this);
			var len_img_cli = config.click.img.length,
				len_img_hob = config.hover.img.length;						
				
						
			jQuery(vQuery).click(function(){								
				jQuery(this).attr("src",config.click.img[recorrer(cou_cli,len_img_cli,'cou_cli')]);	
				alert(cou_cli);
			});	

						
		});				
	};
})( jQuery );