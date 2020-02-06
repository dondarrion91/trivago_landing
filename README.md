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

##Tercer commit: Filtro en barra de busquedas por pais y uso de react-datepicker

Hice uso de un paquete llamado react-datepicker para obtener datos de las fechas de partida y llegada , declaro un estado para cada fecha con la funcion Date() y declaro para cada fecha una funcion para cambiar el dico estado.

    state = {
        startDate1: new Date(),
        startDate2: new Date(),
    };

    handleChange1 = date => {
        this.setState({
          startDate1: date
        });
    };

    handleChange2 = date => {
        this.setState({
          startDate2: date
        });
    };

importo el componente Datepicker del paquete antes mencionado y le paso una propiedad selected que muestre el estado de la fecha seleccionada y un evento para manejar dicho estado.

    <DatePicker
        selected={this.state.startDate1}
        onChange={this.handleChange1}
    />
        
    <DatePicker
        selected={this.state.startDate2}
        onChange={this.handleChange2}
    />

Para la barra de busquedas declaro el estado con dos arrays vacias , una que tendra los items importados de un array con una lista de paises y otra lo que yo ponga en pantalla

    state = {
        initialItems: [],
        items: []
    }

Luego una funcion que crea un array items donde introduce los elementos que coinciden con la entrada por pantalla de los datos.

    filterList = (event) => {
        let items = this.state.initialItems;
        items = items.filter((item) => {
          return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: items});
    }

Luego otra funcion que introduce los valores en los arrays declarados anteriormente

    componentWillMount = () => {
        this.setState({
            initialItems: this.props.content,
            items: this.props.content
        })
    }

y por ultimo el input con el evento declarado anteriormente y un div donde imprime por pantalla cada elemento de la lista filtrada. 

    <input type="text" placeholder="Search" onChange={this.filterList}/>
    <div className="places">
        {
            this.state.items.map(function (item) {
                return <div key={item}><FontAwesomeIcon icon={faMapMarkerAlt} /> {item}</div>
            })
        }
    </div>

##Cuarto commit: Seleccion en el filtro de busquedas

Agregue el evento de seleccion onClick en el filtro de busquedas.

##Quinto commit: Optimizacion del filtro de busquedas y recordatorio de busquedas

Introduci un bloque que recuerda las busquedas que hace el usario donde imprime el lugar y la fecha de llegada y salida ,
agregue una galeria de imagenes y un carrousel en el cual use un plugin llamado owl-carrousel , tambien agregue un dropdown en el header con monedas de todos los paises y por ultimo una descripcion global de la pagina.