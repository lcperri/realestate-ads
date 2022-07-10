const regExps = {
    city: { 
        regExp: /^[a-zA-ZÀ-ÿ0-9\/\s]{3,48}$/, //puede llevar letras min, May, acentos, diéresis, números y espacios. De 3 a 48 caracteres.
        errorLeyend: 'El nombre de la ciudad debe tener entre 3 a 48 caracteres. Sólo pueden ser letras o números.'
    },
    neighbourhood : {
        regExp: /^[a-zA-ZÀ-ÿ0-9\s]{3,48}$/, //puede llevar letras min, May, acentos, diéresis, números y espacios. De 3 a 48 caracteres.
        errorLeyend: 'El nombre de la zona/barrio debe tener entre 3 a 48 caracteres. Sólo pueden ser letras o números.'
    },
    address: { 
        regExp: /^[a-zA-ZÀ-ÿ0-9\s\/\.]{5,90}$/, //puede llevar letras min, May, acentos, diéresis, números y espacios. De 3 a 48 caracteres.
        errorLeyend: 'La dirección debe tener entre 5 a 90 caracteres. Sólo pueden ser letras o números.'
    },
    price: { 
        // /^0*([0-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|250)$/
        regExp: /^[1-9][0-9]{1,12}$/, //puede llevar letras min, May, acentos, diéresis, números y espacios. De 3 a 48 caracteres.
        errorLeyend: 'El precio mínimo es 10. Sólo se permiten números.'
    },
    operation: { 
        errorLeyend: 'Debe elegir una operación.'
    },
    type: { 
        errorLeyend: 'Debe elegir un tipo de propiedad.'
    },
    area: { 
        regExp: /^[4-9]|[0-9\x]{1}$/, //puede llevar letras min, May, acentos, diéresis, números y espacios. De 3 a 48 caracteres.
        errorLeyend: 'Área mínima 4 m2. Solo se permiten números o la letra x. Especifique el área total o en largo x ancho. Ejm: 300 o 20 x 15'
    },
    rooms: { 
        regExp: /^[1-9][0-9]{0,1}$/, //puede llevar letras min, May, acentos, diéresis, números y espacios. De 3 a 48 caracteres.
        errorLeyend: 'Especifique como mínimo una habitación. Valor máx 99.'
    },
    bathrooms: {
        regExp: /^[1-9][0-9]{0,1}$/, //puede llevar letras min, May, acentos, diéresis, números y espacios. De 3 a 48 caracteres.
        errorLeyend: 'Especifique como mínimo un baño. Valor máx 12.'
    },
    parkingSlot: {
        errorLeyend: 'Elija una opción.'
    },
    constructionDate: {
        regExp: /^(19|20)\d{2}$/,
        errorLeyend: 'Fecha mínima 1900. Máx año actual.'
    },
    renovationDate: {
        regExp: /^(19|20)\d{2}$/,
        errorLeyend: 'Fecha mínima 1900. Máx año actual. La fecha de renovación no puede ser menor que la fecha de construcción.'
    },
    email: {
        regExp: /\S+@\S+\.\S+/,
        errorLeyend: 'Ingrese un e-mail válido.'
    },
    password: {
        regExp: /^.{6,24}$/,
        errorLeyend: 'La contraseña debe tener entre 6 y 24 caracteres.'
    },
    name: {
        regExp: /^[a-zA-Z\s]*$/,
        errorLeyend: 'Ingrese solo caracteres.'
    },
    lastName: {
        regExp: /^[a-zA-Z\s]*$/,
        errorLeyend: 'Ingrese solo caracteres.'
    },
    dni: { 
        regExp: /^[0-9][0-9]{1,}$/, //solo numeros
        errorLeyend: 'Sólo se permiten números y hasta 8 digitos.'
    },
    
}

export { regExps } 