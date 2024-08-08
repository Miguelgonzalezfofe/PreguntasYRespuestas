const questionsData = {
    themes: {
        "Boca Juniors": [
            { text: "¿En qué año fue fundado Boca Juniors?", options: ["1905", "1910", "1920"], correct: 0 },
            { text: "¿Cuál es el estadio de Boca Juniors conocido popularmente?", options: ["El Monumental", "La Bombonera", "El Cilindro"], correct: 1 },
            { text: "¿Cuántas Copas Libertadores ha ganado Boca Juniors hasta 2020?", options: ["4", "6", "8"], correct: 1 },
            { text: "¿Quién es el máximo goleador histórico de Boca Juniors?", options: ["Martín Palermo", "Carlos Tevez", "Diego Maradona"], correct: 0 },
            { text: "¿Qué jugador de Boca Juniors es conocido como 'El Loco'?", options: ["Juan Román Riquelme", "Martín Palermo", "Hugo Gatti"], correct: 2 },
            { text: "¿En qué barrio de Buenos Aires está ubicado el estadio de Boca Juniors?", options: ["Palermo", "La Boca", "Recoleta"], correct: 1 },
            { text: "¿Quién es el entrenador más exitoso en la historia de Boca Juniors?", options: ["Alfio Basile", "Carlos Bianchi", "Miguel Ángel Russo"], correct: 1 },
            { text: "¿Qué jugador famoso de Boca Juniors también jugó para el FC Barcelona?", options: ["Lionel Messi", "Carlos Tevez", "Diego Maradona"], correct: 2 },
            { text: "¿Qué rival de Boca Juniors es conocido como 'El Superclásico'?", options: ["Racing Club", "San Lorenzo", "River Plate"], correct: 2 },
            { text: "¿Qué color predominante tiene la camiseta de Boca Juniors?", options: ["Azul y oro", "Rojo y blanco", "Negro y amarillo"], correct: 0 }
        ],
        "River Plate": [
            { text: "¿En qué año fue fundado River Plate?", options: ["1901", "1905", "1910"], correct: 0 },
            { text: "¿Cuál es el apodo de River Plate?", options: ["El Rojo", "El Millonario", "El Fortín"], correct: 1 },
            { text: "¿Cuántas Copas Libertadores ha ganado River Plate hasta 2020?", options: ["3", "4", "5"], correct: 1 },
            { text: "¿Quién es el máximo goleador histórico de River Plate?", options: ["Norberto Alonso", "Enzo Francescoli", "Ángel Labruna"], correct: 2 },
            { text: "¿Cuál es el nombre del estadio de River Plate?", options: ["Estadio Monumental", "La Bombonera", "El Gasómetro"], correct: 0 },
            { text: "¿Qué jugador de River Plate es conocido como 'El Príncipe'?", options: ["Enzo Francescoli", "Daniel Passarella", "Ariel Ortega"], correct: 0 },
            { text: "¿Qué entrenador llevó a River Plate a ganar la Copa Libertadores en 2015?", options: ["Ramón Díaz", "Marcelo Gallardo", "Héctor Veira"], correct: 1 },
            { text: "¿Quién fue el primer entrenador de River Plate?", options: ["Renato Cesarini", "José María Minella", "Carlos Peucelle"], correct: 2 },
            { text: "¿Qué color predominante tiene la camiseta de River Plate?", options: ["Rojo y blanco", "Azul y oro", "Verde y negro"], correct: 0 },
            { text: "¿Qué jugador de River Plate fue apodado 'El Burrito'?", options: ["Pablo Aimar", "Ariel Ortega", "Javier Saviola"], correct: 1 }
        ],
        "Independiente": [
            { text: "¿En qué año fue fundado Independiente?", options: ["1904", "1905", "1906"], correct: 1 },
            { text: "¿Cuál es el apodo de Independiente?", options: ["El Ciclón", "El Rojo", "La Academia"], correct: 1 },
            { text: "¿Cuántas Copas Libertadores ha ganado Independiente hasta 2020?", options: ["5", "6", "7"], correct: 2 },
            { text: "¿Quién es el máximo goleador histórico de Independiente?", options: ["Arsenio Erico", "Ricardo Bochini", "Sergio Agüero"], correct: 0 },
            { text: "¿Cuál es el nombre del estadio de Independiente?", options: ["Estadio Libertadores de América", "El Monumental", "La Bombonera"], correct: 0 },
            { text: "¿Qué jugador de Independiente es conocido como 'El Bocha'?", options: ["Diego Forlán", "Ricardo Bochini", "Gabriel Milito"], correct: 1 },
            { text: "¿Qué entrenador llevó a Independiente a ganar su primera Copa Libertadores?", options: ["Osvaldo Zubeldía", "José Pastoriza", "Manuel Giúdice"], correct: 2 },
            { text: "¿Quién fue el primer entrenador de Independiente?", options: ["Renato Cesarini", "José María Minella", "Carlos Peucelle"], correct: 2 },
            { text: "¿Qué color predominante tiene la camiseta de Independiente?", options: ["Rojo", "Azul", "Blanco"], correct: 0 },
            { text: "¿Qué jugador de Independiente fue apodado 'Kun'?", options: ["Diego Forlán", "Sergio Agüero", "Gabriel Milito"], correct: 1 }
        ],
        "Racing Club": [
            { text: "¿En qué año fue fundado Racing Club?", options: ["1903", "1905", "1908"], correct: 2 },
            { text: "¿Cuál es el apodo de Racing Club?", options: ["El Globo", "La Academia", "El Granate"], correct: 1 },
            { text: "¿Cuántas Copas Libertadores ha ganado Racing Club hasta 2020?", options: ["1", "2", "3"], correct: 0 },
            { text: "¿Quién es el máximo goleador histórico de Racing Club?", options: ["Lisandro López", "Diego Milito", "Alberto Ohaco"], correct: 2 },
            { text: "¿Cuál es el nombre del estadio de Racing Club?", options: ["El Cilindro", "La Bombonera", "El Monumental"], correct: 0 },
            { text: "¿Qué jugador de Racing Club es conocido como 'El Príncipe'?", options: ["Diego Milito", "Gabriel Batistuta", "Ricardo Bochini"], correct: 0 },
            { text: "¿Qué entrenador llevó a Racing Club a ganar la Superliga Argentina en 2019?", options: ["Eduardo Coudet", "Diego Cocca", "Alfio Basile"], correct: 0 },
            { text: "¿Quién fue el primer entrenador de Racing Club?", options: ["Juan José Pizzuti", "Pedro Dellacha", "Alfio Basile"], correct: 0 },
            { text: "¿Qué color predominante tiene la camiseta de Racing Club?", options: ["Celeste y blanco", "Rojo y blanco", "Azul y amarillo"], correct: 0 },
            { text: "¿Qué jugador de Racing Club fue apodado 'Licha'?", options: ["Lisandro López", "Diego Milito", "Gabriel Hauche"], correct: 0 }
        ]
    }
};
