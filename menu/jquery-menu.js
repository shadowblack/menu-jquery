/*
* Pugin jQuery 
* Creado por: Luis Raúl
* Descripcion: Animacion de menus personalizados y cambios de imagen
*/
(function( $ ){


	jQuery.fn.menueimg = function(config){
		var config_default = 	{	
									click : {img:['a','f'], event : undefined},
									hover :  {img:Array([],[]),event : undefined}									
								};
		var cou_cli = 0,
			cou_hov = 0;
		
		var config = $.extend(config,config_default);		

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
				return true;
			} 								
		});			
		
		var len_img_cli = config.click.img.length,
			len_img_hob = config.hover.img.length;
		
		Query(this).click(function(){
			recorrer()
			
		});
		
		recorrer = function(ini,lim,cou){
			if (ini <= lim)
				cou_cli++;
			else
				cou_cli = 0;
			return cou;
		}
	
		
		
	};
})( jQuery );