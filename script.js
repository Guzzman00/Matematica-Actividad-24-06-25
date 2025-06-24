document.addEventListener('DOMContentLoaded', () => {

    const mathContent = {
        expressions: {
            title: "Expresiones Algebraicas y Potenciación",
            navTitle: "Expresiones y Potencias",
            fundamentals: `
                <p>Una expresión algebraica es una receta que mezcla números, letras (variables) y signos de operaciones (+, -, *, /).</p>
                <ul>
                    <li><strong>Términos Semejantes:</strong> Solo puedes sumar o restar términos que tengan la misma parte literal (iguales variables con iguales exponentes).</li>
                </ul>
                <h4>¡Atención! Errores Comunes con Potencias</h4>
                <ul>
                    <li><strong>Potencia vs. Multiplicación:</strong> Es vital no confundir $$6^4$$con$$6 \\times 4$$. $$6 \\times 4$$es una suma repetida ($$6+6+6+6$$), mientras que$$6^4$$ es una multiplicación repetida ($$6 \\times 6 \\times 6 \\times 6$$).</li>
                    <li><strong>El Poder del Paréntesis (El "Escudo Protector"):</strong> Cuando ves $$(-5)^2$$, el paréntesis actúa como un escudo que protege a todo, incluyendo el signo; el resultado es $$(-5) \\cdot (-5) = +25$$. Cuando ves $$-5^2$$, no hay escudo y la potencia solo afecta al 5; el signo negativo espera afuera, resultando en $$-(5 \\cdot 5) = -25$$.</li>
                </ul>
                <h4>Leyes de los Exponentes</h4>
                <ul>
                    <li><strong>Multiplicación (misma base):</strong> Se SUMAN los exponentes ($$x^4 \\cdot x^2 = x^6$$).</li>
                    <li><strong>División (misma base):</strong> Se RESTAN los exponentes ($$a^8 / a^3 = a^5$$).</li>
                    <li><strong>Potencia de una Potencia:</strong> Se MULTIPLICAN los exponentes ($$(b^5)^3 = b^{15}$$).</li>
                    <li><strong>Potencia de un Producto:</strong> El exponente "se reparte" a cada factor que se multiplica dentro del paréntesis ($$(2x)^3 = 8x^3$$).</li>
                    <li><strong>Potencia de una Fracción:</strong> El exponente "se reparte" tanto al numerador como al denominador.</li>
                    <li><strong>Exponente Negativo:</strong> Es una orden para "dar la vuelta" o invertir la base. Luego, el exponente se vuelve positivo.</li>
                    <li><strong>Exponente Fraccionario:</strong> Es un código secreto que conecta potencias y raíces. El denominador te dice qué raíz sacar y el numerador a qué potencia elevar.</li>
                </ul>
            `,
            examples: [
                {
                    difficulty: "Fácil",
                    mission: 'Calcula y compara: a) $$(-5)^2$$y b)$$-5^2$$',
                    development: `
                        <p>a) <strong>$$(-5)^2$$:</strong> El paréntesis es un escudo protector. La base es -5 y se multiplica por sí misma: $$(-5) \\cdot (-5) = +25$$.</p>
                        <p>b) <strong>$$-5^2$$:</strong> No hay escudo. La potencia solo afecta al 5. El signo negativo espera afuera: $$-(5 \\cdot 5) = -25$$.</p>
                    `,
                    answer: '25 y -25',
                    keyboard: ['2', '5', 'y', '-', ' ']
                },
                {
                    difficulty: "Media",
                    mission: 'Simplifica la expresión: $$\\frac{(2x^3y)^2}{x^4y}$$',
                    development: `
                        <p>1. <strong>Potencia de un Producto:</strong> El exponente 2 se "reparte" a cada factor dentro del paréntesis: $$(2)^2 \\cdot (x^3)^2 \\cdot (y)^2 = 4x^6y^2$$.</p>
                        <p>2. <strong>Reescribir Fracción:</strong> La expresión ahora es $$\\frac{4x^6y^2}{x^4y}$$.</p>
                        <p>3. <strong>Dividir:</strong> Se restan los exponentes de las bases iguales: $$x^{6-4}=x^2$$y$$y^{2-1}=y^1$$.</p>
                    `,
                    answer: '4x^2y',
                    keyboard: ['4', 'x', '^', '2', 'y']
                },
                {
                    difficulty: "Media Difícil",
                    mission: 'Simplifica: $$(\\frac{9a^5}{3a^2})^{-2}$$',
                    development: `
                        <p>1. <strong>Simplificar Paréntesis:</strong> Primero, operamos dentro. Dividimos coeficientes ($$9/3=3$$) y restamos exponentes ($$a^{5-2}=a^3$$). La expresión se convierte en $$(3a^3)^{-2}$$.</p>
                        <p>2. <strong>Exponente Negativo:</strong> Es una orden para "dar la vuelta" a la base. $$\\frac{1}{(3a^3)^2}$$.</p>
                        <p>3. <strong>Potencia Final:</strong> Se aplica el exponente 2 al denominador: $$\\frac{1}{3^2(a^3)^2} = \\frac{1}{9a^6}$$.</p>
                    `,
                    answer: '1/(9a^6)',
                    keyboard: ['1', '/', '(', '9', 'a', '^', '6', ')']
                },
                {
                    difficulty: "Difícil",
                    mission: 'Calcula el valor de $$64^{2/3}$$',
                    development: `
                        <p>1. <strong>Exponente Fraccionario:</strong> Es una operación de dos pasos que conecta potencias con raíces.</p>
                        <p>2. <strong>Raíz (Denominador):</strong> El '3' en el denominador te dice que saques la raíz cúbica de 64. $$4 \\cdot 4 \\cdot 4 = 64$$. La raíz cúbica es 4.</p>
                        <p>3. <strong>Potencia (Numerador):</strong> El '2' en el numerador te dice a qué potencia elevar el resultado anterior: $$4^2=16$$.</p>
                    `,
                    answer: '16',
                    keyboard: ['16', '64', '2', '3']
                }
            ],
            practice: [
                {
                    difficulty: "Fácil",
                    mission: 'Simplifica la expresión: $$7a + 2b - 4a - 5b$$',
                    development: `<p>Juntamos términos con 'a': $$7a-4a=3a$$. Juntamos términos con 'b': $$2b-5b=-3b$$. El resultado es $$3a-3b$$.</p>`,
                    answer: '3a-3b',
                    keyboard: ['3', 'a', '-', 'b']
                },
                {
                    difficulty: "Media",
                    mission: 'Calcula el valor de: $$(-10)^2 + (-2)^3$$',
                    development: `<p>$$(-10)^2$$es$$(-10) \\cdot (-10) = 100$$(con escudo protector).$$(-2)^3$$es$$(-2) \\cdot (-2) \\cdot (-2) = -8$$. La suma es $$100 + (-8) = 92$$.</p>`,
                    answer: '92',
                    keyboard: ['9', '2', '1', '0', '8', '-']
                },
                {
                    difficulty: "Media Difícil",
                    mission: 'Simplifica la expresión: $$5(x^4 \\cdot x^{-1})^2$$',
                    development: `<p>1. Dentro del paréntesis, se suman los exponentes: $$x^{4+(-1)} = x^3$$.</p><p>2. La expresión se convierte en $$5(x^3)^2$$.</p><p>3. Se aplica la potencia de una potencia, multiplicando los exponentes: $$(x^3)^2 = x^{3 \\cdot 2} = x^6$$.</p><p>4. El 5 de afuera multiplica el resultado: $$5x^6$$.</p>`,
                    answer: '5x^6',
                    keyboard: ['5', 'x', '^', '6', '3', '2']
                },
                {
                    difficulty: "Difícil",
                    mission: 'Simplifica la expresión: $$(\\frac{64}{x^9})^{1/3}$$',
                    development: `<p>El exponente fraccionario 1/3 significa "raíz cúbica". Se aplica tanto al numerador como al denominador: $$\\frac{\\sqrt[3]{64}}{\\sqrt[3]{x^9}}$$. La raíz cúbica de 64 es 4. La raíz cúbica de $$x^9$$es$$x^{9/3} = x^3$$. El resultado es $$\\frac{4}{x^3}$$.</p>`,
                    answer: '4/x^3',
                    keyboard: ['4', '/', 'x', '^', '3']
                }
            ]
        },
        equations: {
            title: "Ecuaciones",
            navTitle: "Ecuaciones",
            fundamentals: `
                <p>El objetivo en una ecuación es agrupar los términos con 'x' en un lado y las constantes en el otro para poder despejar la variable.</p>
                <h4>Principios Fundamentales</h4>
                <ul>
                    <li><strong>Misión Principal y Operaciones Opuestas:</strong> La misión es siempre dejar a la 'x' sola. Para mover un término al otro lado de la igualdad, se usa su operación opuesta: lo que suma pasa restando, lo que multiplica pasa dividiendo, y viceversa.</li>
                    <li><strong>Propiedad de la Igualdad para la Suma:</strong> Formalmente, esto significa que si sumas o restas la misma cantidad en ambos lados, la igualdad se mantiene.</li>
                    <li><strong>Propiedad de la Igualdad para la Multiplicación:</strong> De igual forma, si multiplicas o divides por una misma cantidad (no nula) en ambos lados, la igualdad se mantiene.</li>
                    <li><strong>Ecuaciones Racionales:</strong> Se resuelven multiplicando TODOS los términos por el Mínimo Común Denominador (MCD) para eliminar las fracciones.</li>
                    <li><strong>Ecuaciones Radicales y Soluciones Extrañas:</strong> Se pueden elevar ambos lados a la misma potencia para eliminar raíces, pero ¡cuidado! este proceso puede introducir "soluciones extrañas". Por eso es obligatorio verificar la solución en la ecuación original.</li>
                </ul>
            `,
            examples: [
                {
                    difficulty: "Fácil",
                    mission: 'Resuelve la ecuación $$4x - 5 = 19$$',
                    development: `
                        <p>1. La misión es despejar la 'x'. Primero movemos lo que suma o resta. El '-5' pasa al otro lado SUMANDO. $$4x = 19 + 5 \\implies 4x = 24$$.</p>
                        <p>2. Ahora, el '4' que está multiplicando, pasa al otro lado DIVIDIENDO. $$x = \\frac{24}{4}$$.</p>
                    `,
                    answer: 'x=6',
                    keyboard: ['x', '=', '6', '4', '1', '9']
                },
                {
                    difficulty: "Media",
                    mission: 'Resuelve: $$\\frac{1}{4} + \\frac{5}{6} = x$$',
                    development: `
                        <p>1. <strong>Encontrar el MCD:</strong> Usamos la 'tablita' para 4 y 6. El MCM es $$2 \\times 2 \\times 3 = 12$$.</p>
                        <p>2. <strong>Convertir Fracciones:</strong> Para $$\\frac{1}{4}$$, dividimos 12 en 4 (=3) y multiplicamos arriba: $$\\frac{3}{12}$$. Para $$\\frac{5}{6}$$, dividimos 12 en 6 (=2) y multiplicamos arriba: $$\\frac{10}{12}$$.</p>
                        <p>3. <strong>Sumar:</strong> $$x = \\frac{3}{12} + \\frac{10}{12} = \\frac{13}{12}$$.</p>
                    `,
                    answer: 'x=13/12',
                    keyboard: ['x', '=', '13', '/', '12']
                },
                {
                    difficulty: "Media Difícil",
                    mission: 'Resuelve la ecuación: $$\\frac{x-2}{3} + 2 = \\frac{x}{2}$$',
                    development: `
                        <p>1. <strong>MCD de Denominadores:</strong> El MCD de 3 y 2 es 6.</p>
                        <p>2. <strong>Eliminar Denominadores:</strong> Multiplicamos TODOS los términos por 6. $$6(\\frac{x-2}{3}) + 6(2) = 6(\\frac{x}{2})$$.</p>
                        <p>3. <strong>Simplificar:</strong> $$2(x-2) + 12 = 3x$$.</p>
                        <p>4. <strong>Resolver:</strong> $$2x - 4 + 12 = 3x \\implies 2x + 8 = 3x \\implies 8 = x$$.</p>
                    `,
                    answer: 'x=8',
                    keyboard: ['x', '=', '8', '2', '3']
                },
                {
                    difficulty: "Difícil",
                    mission: 'Resuelve la ecuación: $$\\sqrt[3]{5x-2} = 2$$',
                    development: `
                        <p>1. <strong>Principio de Potencia:</strong> Para eliminar una raíz cúbica, elevamos ambos lados al cubo (a la potencia 3).</p>
                        <p>$$(\\sqrt[3]{5x-2})^3 = 2^3$$</p>
                        <p>2. <strong>Simplificar:</strong> $$5x - 2 = 8$$.</p>
                        <p>3. <strong>Resolver Ecuación Lineal:</strong> $$5x = 8+2 \\implies 5x = 10 \\implies x=2$$.</p>
                        <p>4. En las raíces impares como la cúbica, no es necesario verificar soluciones extrañas.</p>
                    `,
                    answer: 'x=2',
                    keyboard: ['x', '=', '2', '5', '8']
                }
            ],
            practice: [
                {
                    difficulty: "Fácil",
                    mission: 'Resuelve: $$x/3 - 2 = 5$$',
                    development: `<p>Primero, el -2 pasa sumando: $$x/3 = 5+2=7$$. Luego, el 3 que divide pasa multiplicando: $$x = 7 \\cdot 3 = 21$$.</p>`,
                    answer: 'x=21',
                    keyboard: ['x', '=', '2', '1']
                },
                {
                    difficulty: "Media",
                    mission: 'Resuelve: $$1/2 + 3/x = 5/8$$',
                    development: `<p>Mueve $$1/2$$restando:$$3/x = 5/8 - 1/2$$. El MCD de 8 y 2 es 8. $$3/x = 5/8 - 4/8 = 1/8$$. Ahora, si $$3/x=1/8$$, multiplicando cruzado tenemos que $$x = 3 \\cdot 8 = 24$$.</p>`,
                    answer: 'x=24',
                    keyboard: ['x', '=', '2', '4']
                },
                {
                    difficulty: "Media Difícil",
                    mission: 'Resuelve: $$2(x+5) - 4 = 4x$$',
                    development: `<p>1. Distribuye el 2: $$2x+10-4=4x$$.</p><p>2. Simplifica: $$2x+6=4x$$.</p><p>3. Agrupa las 'x': $$6 = 4x-2x \\implies 6=2x$$.</p><p>4. Despeja: $$x=3$$.</p>`,
                    answer: 'x=3',
                    keyboard: ['x', '=', '3', '2', '4']
                },
                {
                    difficulty: "Difícil",
                    mission: 'Resuelve: $$\\frac{x+1}{2} = \\frac{x+2}{3}$$',
                    development: `<p>1. Esta es una proporción, podemos "multiplicar cruzado".</p><p>2. $$3(x+1) = 2(x+2)$$.</p><p>3. Distribuir: $$3x+3 = 2x+4$$.</p><p>4. Agrupar 'x' a un lado y números al otro: $$3x-2x=4-3 \\implies x=1$$.</p>`,
                    answer: 'x=1',
                    keyboard: ['x', '=', '1', '2', '3']
                }
            ]
        },
        inequalities: {
            title: "Inecuaciones",
            navTitle: "Inecuaciones",
            fundamentals: `
                <p>Las inecuaciones se resuelven de forma muy parecida a las ecuaciones, pero con una Regla de Oro que lo cambia todo.</p>
                <h4>Propiedades Generales</h4>
                <ul>
                    <li><strong>Principio de la Adición:</strong> Si se suma o resta un mismo número a ambos lados de una desigualdad, esta no cambia.</li>
                    <li><strong>Multiplicación por un Número Positivo:</strong> Si se multiplican o dividen ambos lados por un número positivo, la desigualdad no cambia.</li>
                    <li><strong>Multiplicación por un Número Negativo (La Regla de Oro):</strong> Si se multiplican o dividen ambos lados por un número negativo, la desigualdad SE INVIERTE.</li>
                </ul>
                <h4>Estrategias para Inecuaciones Complejas</h4>
                <ul>
                    <li><strong>Inecuaciones Racionales:</strong> NUNCA se debe multiplicar en cruz por una expresión con variable. Se debe pasar todo a un lado para comparar con cero y analizar los puntos críticos.</li>
                </ul>
            `,
            examples: [
                {
                    difficulty: "Fácil",
                    mission: 'Resuelve la inecuación $$11 - 4x < 23$$',
                    development: `
                        <p>1. Mover Constante: Movemos el 11 (positivo) restando: $$-4x < 23 - 11 \\implies -4x < 12$$.</p>
                        <p>2. Dividir por Negativo: Para despejar 'x', dividimos por -4. Como es un número negativo, DEBEMOS INVERTIR el signo de '<' a '>'.</p>
                        <p>$$x > \\frac{12}{-4} \\implies x > -3$$.</p>
                    `,
                    answer: 'x>-3',
                    keyboard: ['x', '>', '<', '-', '3']
                },
                {
                    difficulty: "Media",
                    mission: 'Resuelve: $$-5 \\le 2x + 1 < 7$$',
                    development: `
                        <p>1. Esta es una inecuación compuesta. El objetivo es aislar la 'x' en el centro.</p>
                        <p>2. <strong>Restar 1:</strong> Restamos 1 a las TRES partes de la inecuación: $$-5 - 1 \\le 2x < 7 - 1 \\implies -6 \\le 2x < 6$$.</p>
                        <p>3. <strong>Dividir por 2:</strong> Dividimos las TRES partes por 2. Como es positivo, el signo no cambia: $$\\frac{-6}{2} \\le x < \\frac{6}{2} \\implies -3 \\le x < 3$$.</p>
                    `,
                    answer: '[-3,3)',
                    keyboard: ['[', '-', '3', ',', ' ', ')']
                },
                {
                    difficulty: "Media Difícil",
                    mission: 'Resuelve: $$-2(x+5) \\le 20$$',
                    development: `
                        <p>1. Podemos dividir por -2 primero. Al ser negativo, invertimos el signo de '≤' a '≥': $$x+5 \\ge \\frac{20}{-2} \\implies x+5 \\ge -10$$.</p>
                        <p>2. Ahora, el +5 pasa restando: $$x \\ge -10 - 5 \\implies x \\ge -15$$.</p>
                    `,
                    answer: 'x≥-15',
                    keyboard: ['x', '≥', '-', '1', '5']
                },
                {
                    difficulty: "Difícil",
                    mission: 'Resuelve: $$\\frac{x}{x+1} > 2$$',
                    development: `
                        <p>1. <strong>NO Multiplicar en Cruz:</strong> Se pasa el 2 restando para comparar con cero.</p>
                        <p>$$\\frac{x}{x+1} - 2 > 0$$</p>
                        <p>2. <strong>Operar Fracción:</strong> Se busca denominador común.</p>
                        <p>$$\\frac{x - 2(x+1)}{x+1} > 0$$</p>
                        <p>3. <strong>Simplificar:</strong></p>
                        <p>$$\\frac{x - 2x - 2}{x+1} > 0 \\implies \\frac{-x - 2}{x+1} > 0$$</p>
                        <p>4. <strong>Puntos Críticos:</strong> x=-2 (numerador), x=-1 (denominador).</p>
                        <p>5. <strong>Analizar Signos:</strong> Probamos un valor en el intervalo entre -2 y -1 (ej. x=-1.5), que da un resultado positivo. El intervalo solución es (-2, -1).</p>
                    `,
                    answer: 'x∈(-2,-1)',
                    keyboard: ['x', '∈', '(', '-', '2', ',', '1', ')']
                }
            ],
            practice: [
                {
                    difficulty: "Fácil",
                    mission: 'Resuelve: $$x + 9 < 2$$',
                    development: `<p>El +9 pasa al otro lado restando: $$x < 2 - 9 \\implies x < -7$$.</p>`,
                    answer: 'x<-7',
                    keyboard: ['x', '<', '-', '7']
                },
                {
                    difficulty: "Media",
                    mission: 'Resuelve: $$-2(x+3) \\ge 14$$',
                    development: `<p>Dividimos ambos lados por -2. Al ser negativo, se invierte la desigualdad: $$x+3 \\le \\frac{14}{-2} \\implies x+3 \\le -7$$. Luego, el +3 pasa restando: $$x \\le -7-3 \\implies x \\le -10$$.</p>`,
                    answer: 'x≤-10',
                    keyboard: ['x', '≤', '-', '1', '0']
                },
                {
                    difficulty: "Media Difícil",
                    mission: 'Resuelve: $$4(1-x) > x + 9$$',
                    development: `<p>1. Distribuye el 4: $$4-4x > x+9$$.</p><p>2. Agrupa 'x': $$4-9 > x+4x \\implies -5 > 5x$$.</p><p>3. Despeja 'x' dividiendo por 5 (positivo, no se invierte el signo): $$-1 > x$$, que es lo mismo que $$x < -1$$.</p>`,
                    answer: 'x<-1',
                    keyboard: ['x', '<', '-', '1']
                },
                {
                    difficulty: "Difícil",
                    mission: 'Resuelve: $$x/(x+1) > 2$$',
                    development: `<p>Se pasa el 2 restando: $$x/(x+1) - 2 > 0$$. Se opera: $$(x - 2(x+1))/(x+1) > 0 \\implies (-x-2)/(x+1) > 0$$. Puntos críticos: x=-2 y x=-1. Se analiza el intervalo entre ellos (ej. x=-1.5), que da un resultado positivo. La solución es $$x \\in (-2, -1)$$.</p>`,
                    answer: 'x∈(-2,-1)',
                    keyboard: ['x', '∈', '(', '-', '2', ',', '1', ')']
                }
            ]
        },
        percentages: {
            title: "Porcentajes",
            navTitle: "Porcentajes",
            fundamentals: `
                <p>Un porcentaje representa una parte de 100. El símbolo '%' significa "de cada 100".</p>
                <h4>Homologación: Las 3 Formas de Decir lo Mismo</h4>
                <p>Saber pasar de una forma a otra es la clave.</p>
                <ul>
                    <li><strong>De Porcentaje a Fracción:</strong> Pones el número sobre 100 y simplificas (ej. 40% se convierte en 40/100 o 2/5).</li>
                    <li><strong>De Porcentaje a Decimal:</strong> Mueves la coma decimal dos lugares a la izquierda (ej. 75% se convierte en 0.75).</li>
                    <li><strong>De Decimal a Porcentaje:</strong> Mueves la coma decimal dos lugares a la derecha (ej. 0.2 se convierte en 20%).</li>
                </ul>
                <h4>Cálculos con Porcentajes</h4>
                <ul>
                    <li><strong>Método Decimal:</strong> Es el método más fácil para calcular el porcentaje de un número. Primero, convierte el porcentaje a decimal; segundo, multiplica ese decimal por el número total.</li>
                    <li><strong>El Método Rápido (Aumentos y Descuentos):</strong> Para calcular un precio final directamente, puedes sumar o restar el porcentaje al 100% primero.
                        <ul>
                            <li>Para un **descuento** del 20%, pagas el 80% del precio (100%-20%).</li>
                            <li>Para un **aumento** del 19% (IVA), pagas el 119% del precio (100%+19%).</li>
                        </ul>
                    </li>
                </ul>
            `,
            examples: [
                {
                    difficulty: "Fácil",
                    mission: 'Calcula el 15% de 300.',
                    development: `
                        <p>1. <strong>Convertir Porcentaje a Decimal:</strong> 15% se convierte en 0.15.</p>
                        <p>2. <strong>Multiplicar:</strong> Multiplicamos el decimal por el número total: $$0.15 \\cdot 300 = 45$$.</p>
                    `,
                    answer: '45',
                    keyboard: ['4', '5', '0', '1', '3']
                },
                {
                    difficulty: "Media",
                    mission: 'Un pantalón de $30.000 tiene un 40% de descuento. ¿Cuál es el precio final?',
                    development: `
                        <p><strong>Método Rápido:</strong> Si te descuentan el 40%, significa que pagas el 60% del valor total (100% - 40% = 60%).</p>
                        <p>1. <strong>Convertir Porcentaje Final a Decimal:</strong> 60% es 0.60.</p>
                        <p>2. <strong>Calcular Precio Final:</strong> $$0.60 \\cdot 30.000 = 18.000$$.</p>
                    `,
                    answer: '$18.000',
                    keyboard: ['$', '1', '8', '.', '0']
                },
                {
                    difficulty: "Media Difícil",
                    mission: 'Una cuenta de restaurante es de $25.500. Si quieres dejar un 10% de propina, ¿cuánto pagas en total?',
                    development: `
                         <p><strong>Método Rápido para Aumentos:</strong> El pago total será el 100% de la cuenta más el 10% de propina, es decir, el 110%.</p>
                        <p>1. <strong>Convertir Porcentaje Final a Decimal:</strong> 110% es 1.10.</p>
                        <p>2. <strong>Calcular Pago Final:</strong> $$1.10 \\cdot 25.500 = 28.050$$.</p>
                    `,
                    answer: '$28.050',
                    keyboard: ['$', '2', '8', '.', '0', '5']
                },
                {
                    difficulty: "Difícil",
                    mission: 'Se vendió un producto en $34.000 después de aplicarle un 15% de descuento. ¿Cuál era el precio original del producto?',
                    development: `
                        <p>1. <strong>Análisis:</strong> Si se aplicó un 15% de descuento, el precio de venta ($34.000) corresponde al 85% del precio original (100% - 15%).</p>
                        <p>2. <strong>Plantear Ecuación:</strong> Podemos escribir esto como una ecuación, donde 'P' es el precio original: $$0.85 \\cdot P = 34.000$$.</p>
                        <p>3. <strong>Despejar 'P':</strong> Para encontrar el precio original, dividimos el precio final por el decimal que representa el porcentaje pagado.</p>
                        <p>$$P = \\frac{34.000}{0.85} = 40.000$$.</p>
                    `,
                    answer: '$40.000',
                    keyboard: ['$', '4', '0', '.', '8', '5', 'P']
                }
            ],
            practice: [
                {
                    difficulty: "Fácil",
                    mission: 'En una clase de 40 alumnos, el 25% son hombres. ¿Cuántos hombres hay en la clase?',
                    development: `<p>Se convierte 25% a decimal (0.25) y se multiplica por el total de alumnos: $$0.25 \\times 40 = 10$$. Otra forma es recordar que 25% es un cuarto, y un cuarto de 40 es 10.</p>`,
                    answer: '10 hombres',
                    keyboard: ['1', '0', ' ', 'h', 'o', 'm', 'b', 'r', 'e', 's']
                },
                {
                    difficulty: "Media",
                    mission: 'Un videojuego que cuesta $50.000 está en oferta con un 35% de descuento. ¿Cuánto cuesta el juego en oferta?',
                    development: `<p>Si hay un 35% de descuento, se paga el 65% del precio (100% - 35%). Se calcula el 65% de 50.000: $$0.65 \\times 50.000 = 32.500$$.</p>`,
                    answer: '$32.500',
                    keyboard: ['$', '3', '2', '.', '5', '0']
                },
                {
                    difficulty: "Media Difícil",
                    mission: 'El arriendo mensual de un departamento es de $350.000. Si al renovar el contrato el precio sube un 8%, ¿cuál será el nuevo arriendo mensual?',
                    development: `<p>Si el precio sube un 8%, el nuevo total es el 108% del valor original (100% + 8%). Se calcula el 108% de 350.000: $$1.08 \\times 350.000 = 378.000$$.</p>`,
                    answer: '$378.000',
                    keyboard: ['$', '3', '7', '8', '.', '0']
                },
                {
                    difficulty: "Difícil",
                    mission: 'Daniela pagó $21.000 por un vestido que tenía un 30% de descuento. ¿Cuál era el precio original del vestido?',
                    development: `<p>Si el vestido tenía un 30% de descuento, Daniela pagó el 70% de su valor original (100% - 30%). Por lo tanto, los $21.000 representan el 70% del precio original (P). La ecuación es $$0.70 \\times P = 21.000$$. Se despeja P: $$P = 21.000 / 0.70 = 30.000$$.</p>`,
                    answer: '$30.000',
                    keyboard: ['$', '3', '0', '.', '2', '1']
                }
            ]
        }
    };

    // --- DOM REFERENCES ---
    const modeSelector = document.getElementById('mode-selector');
    const theoryContainer = document.getElementById('theory-container');
    const practiceContainer = document.getElementById('practice-container');
    const topicNav = document.getElementById('topic-nav');

    // Theory Mode Elements
    const topicTitleTheory = document.getElementById('topic-title-theory');
    const fundamentalsContent = document.getElementById('fundamentals-content');
    const exampleSelectionArea = document.getElementById('example-selection-area');
    const exampleDifficulty = document.getElementById('example-difficulty');
    const guidedMission = document.getElementById('guided-mission');
    const guidedDevelopment = document.getElementById('guided-development');
    const guidedAnswer = document.getElementById('guided-answer');
    const answerBoxTheory = document.getElementById('answer-box-theory');
    const keyboardTheory = document.getElementById('keyboard-theory');
    const checkAnswerBtnTheory = document.getElementById('check-answer-btn-theory');
    const clearAnswerBtnTheory = document.getElementById('clear-answer-btn-theory');
    const feedbackMessageTheory = document.getElementById('feedback-message-theory');

    // Practice Mode Elements
    const topicTitlePractice = document.getElementById('topic-title-practice');
    const practiceSelectionArea = document.getElementById('practice-selection-area');
    const practiceDifficulty = document.getElementById('practice-difficulty');
    const practiceMission = document.getElementById('practice-mission');
    const answerBoxPractice = document.getElementById('answer-box-practice');
    const keyboardPractice = document.getElementById('keyboard-practice');
    const checkAnswerBtnPractice = document.getElementById('check-answer-btn-practice');
    const clearAnswerBtnPractice = document.getElementById('clear-answer-btn-practice');
    const feedbackMessagePractice = document.getElementById('feedback-message-practice');
    const practiceSolutionContainer = document.getElementById('practice-solution-container');
    const practiceDevelopment = document.getElementById('practice-development');


    let currentTopicKey = 'expressions';
    let currentExampleIndex = 0;
    let currentPracticeIndex = 0;
    let currentMode = 'theory';

    // --- LOGIC FUNCTIONS ---
    function switchMode(mode) {
        currentMode = mode;
        const theoryBtn = document.getElementById('theory-mode-btn');
        const practiceBtn = document.getElementById('practice-mode-btn');

        theoryContainer.classList.toggle('hidden', mode !== 'theory');
        practiceContainer.classList.toggle('hidden', mode !== 'practice');
        theoryBtn.classList.toggle('active', mode === 'theory');
        practiceBtn.classList.toggle('active', mode === 'practice');

        loadTopic(currentTopicKey);
    }

    function loadTopic(topicKey) {
        currentTopicKey = topicKey;
        const topicData = mathContent[topicKey];
        if (!topicData) return;

        updateNav(topicKey);

        if (currentMode === 'theory') {
            topicTitleTheory.textContent = topicData.title;
            fundamentalsContent.innerHTML = topicData.fundamentals || 'Contenido no disponible.';
            populateDifficultyButtons(exampleSelectionArea, topicData.examples, (index) => loadExample(topicKey, index));
            loadExample(topicKey, 0);
        } else {
            topicTitlePractice.textContent = `Ejercitación: ${topicData.title}`;
            populateDifficultyButtons(practiceSelectionArea, topicData.practice, (index) => loadPractice(topicKey, index));
            loadPractice(topicKey, 0);
        }
    }

    function populateDifficultyButtons(container, items, callback) {
        container.innerHTML = '';
        items.forEach((item, index) => {
            const btn = document.createElement('button');
            btn.textContent = item.difficulty;
            btn.dataset.index = index;
            btn.addEventListener('click', () => callback(index));
            container.appendChild(btn);
        });
    }

    function loadExample(topicKey, exampleIndex) {
        currentExampleIndex = exampleIndex;
        const exampleData = mathContent[topicKey].examples[exampleIndex];
        if (!exampleData) return;
        updateActiveButton(exampleSelectionArea, exampleIndex);

        exampleDifficulty.textContent = exampleData.difficulty;
        guidedMission.innerHTML = exampleData.mission;
        guidedDevelopment.innerHTML = exampleData.development;
        guidedAnswer.textContent = exampleData.answer;

        populateKeyboard(keyboardTheory, exampleData.keyboard);
        clearInteractiveState(feedbackMessageTheory, answerBoxTheory);
        renderMath();
    }

    function loadPractice(topicKey, practiceIndex) {
        currentPracticeIndex = practiceIndex;
        const practiceData = mathContent[topicKey].practice[practiceIndex];
        if (!practiceData) return;
        updateActiveButton(practiceSelectionArea, practiceIndex);

        practiceDifficulty.textContent = practiceData.difficulty;
        practiceMission.innerHTML = practiceData.mission;
        practiceDevelopment.innerHTML = practiceData.development;
        practiceSolutionContainer.classList.add('hidden');

        populateKeyboard(keyboardPractice, practiceData.keyboard);
        clearInteractiveState(feedbackMessagePractice, answerBoxPractice);
        renderMath();
    }

    function populateKeyboard(keyboardEl, keyboardData) {
        keyboardEl.innerHTML = '';
        keyboardData.forEach(item => {
            const keyElement = document.createElement('div');
            keyElement.className = 'draggable-item';
            keyElement.textContent = item;
            keyElement.draggable = true;
            keyboardEl.appendChild(keyElement);
        });
    }

    function setupNavigation() {
        Object.keys(mathContent).forEach(key => {
            const topic = mathContent[key];
            if (topic.navTitle) {
                const navButton = document.createElement('button');
                navButton.dataset.topic = key;
                navButton.textContent = topic.navTitle;
                navButton.addEventListener('click', () => loadTopic(key));
                topicNav.appendChild(navButton);
            }
        });
    }

    function updateNav(activeKey) {
        topicNav.querySelectorAll('button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.topic === activeKey);
        });
    }

    function updateActiveButton(container, activeIndex) {
        container.querySelectorAll('button').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.index == activeIndex);
        });
    }

    function clearInteractiveState(feedbackEl, answerBoxEl) {
        if(answerBoxEl) answerBoxEl.textContent = '';
        if(feedbackEl) {
            feedbackEl.textContent = '';
            feedbackEl.className = 'feedback-message';
        }
        practiceSolutionContainer.classList.add('hidden');
    }

    function renderMath() {
        if (typeof MathJax !== 'undefined') {
            MathJax.typesetPromise().catch((err) => console.log('Error al renderizar MathJax: ' + err.message));
        }
    }

    // --- EVENT LISTENERS ---
    modeSelector.addEventListener('click', (e) => {
        if (e.target.id === 'theory-mode-btn') switchMode('theory');
        if (e.target.id === 'practice-mode-btn') switchMode('practice');
    });

    function setupDragAndDrop(keyboardEl, answerBoxEl) {
        keyboardEl.addEventListener('dragstart', (e) => {
            if (e.target.classList.contains('draggable-item')) {
                e.dataTransfer.setData('text/plain', e.target.textContent);
            }
        });
        answerBoxEl.addEventListener('dragover', (e) => {
            e.preventDefault();
            answerBoxEl.classList.add('drag-over');
        });
        answerBoxEl.addEventListener('dragleave', () => {
            answerBoxEl.classList.remove('drag-over');
        });
        answerBoxEl.addEventListener('drop', (e) => {
            e.preventDefault();
            answerBoxEl.classList.remove('drag-over');
            const data = e.dataTransfer.getData('text/plain');
            answerBoxEl.textContent += data;
        });
    }

    setupDragAndDrop(keyboardTheory, answerBoxTheory);
    setupDragAndDrop(keyboardPractice, answerBoxPractice);

    checkAnswerBtnTheory.addEventListener('click', () => {
        const userAnswer = answerBoxTheory.textContent;
        const correctAnswer = mathContent[currentTopicKey].examples[currentExampleIndex].answer;
        if (userAnswer === correctAnswer) {
            feedbackMessageTheory.textContent = '¡Correcto! Has replicado la respuesta exitosamente.';
            feedbackMessageTheory.className = 'feedback-message correct';
        } else {
            feedbackMessageTheory.textContent = 'Incorrecto. Inténtalo de nuevo. Revisa bien el ejemplo.';
            feedbackMessageTheory.className = 'feedback-message incorrect';
        }
    });

    clearAnswerBtnTheory.addEventListener('click', () => clearInteractiveState(feedbackMessageTheory, answerBoxTheory));

    checkAnswerBtnPractice.addEventListener('click', () => {
        const userAnswer = answerBoxPractice.textContent;
        const practiceItem = mathContent[currentTopicKey].practice[currentPracticeIndex];
        const correctAnswer = practiceItem.answer;

        if (userAnswer === correctAnswer) {
            feedbackMessagePractice.textContent = '¡Excelente! Respuesta correcta.';
            feedbackMessagePractice.className = 'feedback-message correct';
            practiceSolutionContainer.classList.add('hidden');
        } else {
            feedbackMessagePractice.textContent = 'Respuesta incorrecta. Revisa el desarrollo a continuación.';
            feedbackMessagePractice.className = 'feedback-message incorrect';
            practiceDevelopment.innerHTML = practiceItem.development;
            practiceSolutionContainer.classList.remove('hidden');
            renderMath();
        }
    });

    clearAnswerBtnPractice.addEventListener('click', () => clearInteractiveState(feedbackMessagePractice, answerBoxPractice));

    // --- INITIALIZATION ---
    setupNavigation();
    loadTopic(currentTopicKey);
});