Proyecto Landing Page Trivago(https://github.com/dondarrion91/trivago_landing).

## Primer commit

Inicializacion del esqueleto de la app.

## Creacion del header de la pagina

Para el Header cree un componente llamado Header en el archivo header.js y lo importe a el script de la app principal donde hice uso de bootstrap para los estilos ya que se asemejan al de la pagina original y es mucho mas rapido.

## Segundo Commit: Creacion de la estructura del formulario de busqueda

Para crear el formulario de busqueda cree un nuevo componente llamado Form que contiene 3 elementos de formulario y para la seleccion de la cantidad de huespedes use un paquete llamado react-select:
    

    

    <input type="search"/>
    <input type="date"/>

    const options = [
            { value: 'Individual', label:  (
                <>
                    {user}
                    <span style={{ paddingRight: "5px" }}>Individual</span>
                  
                </>
              )},
              { value: 'Doble', label:  (
                <>
                    {userFriends}
                    <span style={{ paddingRight: "5px" }}>Doble</span>
                  
                </>
              )},
              { value: 'Multiple', label:  (
                <>
                    {users}
                    <span style={{ paddingRight: "5px" }}>Multiple</span>
                  
                </>
              )}
            
        ];

Para los iconos utilice una libreria llamada fontawesome , instale los paquetes mediante npm e importe dentro de variables los iconos que utilice y los añadi mediante componentes:

    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
    import { faSearch , faCalendar , faUser, faUserFriends ,faUsers} from '@fortawesome/free-solid-svg-icons'

    const user = <FontAwesomeIcon icon={faUser} />
    const userFriends = <FontAwesomeIcon icon={faUserFriends} />
    const users = <FontAwesomeIcon icon={faUsers} />

Para los estilos utilice varias clases de bootstrap pero la mayoria los hice yo mismo con sass y utilice la libreria gulp para compilar el codigo a css.

    var gulp = require('gulp');
    var sass = require('gulp-sass');
    
    sass.compiler = require('node-sass');
    
    gulp.task('sass', function () {
    return gulp.src('./src/components/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        
        .pipe(gulp.dest('./src/components/css'));
    });
    

    gulp.task('sass:watch', function() {
        gulp.watch('./src/components/scss/**/*.scss', gulp.series('sass'));
    });

En la siguiente etapa voy a empezar a darle fucionalidad al formulario de busquedas, saludos.