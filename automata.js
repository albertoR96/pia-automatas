// Estado de un Automata.
// Recibe como parametros su nombre y si es estado de aceptacion.
/**
 * Automata's state.
 * @param {string} n Name of the state (usually its a number).
 * @param {bool} a Indicates if its an acceptance state.
 */
function State(n, a) {
  /**
   * Name of the state.
   */
  this.name = n;

  /**
   * Acceptance.
   */
  this.accept = a;

  /**
   * Transitions.
   */
  this.transitions = [];
}


// Funcion exclusiva para crear transiciones para un estado-automata basado en numeros.
// Define las transiciones faltantes basandose en las transiciones pasadas en el parametro t.
// Recibe como parametros las trancisiones definidas (t) y el nombre (numero) del estado de validacion.
/**
 * This function it's exclusive for number based automata. Sets the transitions based on the transitions passed in parameter t.
 * @param {Array} t Transitions array.
 * @param {string} validationStateNumber Indicates the name of the validation state.
 * @returns An array of the transitions.
 */
State.getTransitions = function (t, validationStateNumber) {
  let inputs = [];
  let finalTransitions = [];
  for (const tr of t) {
    inputs.push(tr[0]);
    finalTransitions.push([tr[0], tr[1]]);
  }
  for (let i = 0; i < 10; i++) {
    if (inputs.indexOf(`${i}`) === -1) {
      finalTransitions.push([`${i}`, validationStateNumber]);
    }
  }
  return finalTransitions;
};

// Transicion
// Recibe como parametros el caracter de entrada (i) y el nombre (numero) de estado de salida (o).
/**
 * An automata's state transition.
 * @param {string} i Input char.
 * @param {*} o Output state's name (number).
 */
function Transition(i, o) {
  this.input = i;
  this.output = o;
}

/**
 * Automata (DFA). Usally defined as a state machine.
 */
function Automata() {
  /**
   * States of the automata.
   */
  this.states = [];

  /**
   * Array of results. The result is an array like: [actualState.name, c, newState.name, newState.accept]
   */
  this.results = [];
}

// Busca el siguiente estado y lo retorna.
/**
 * Searches the next state and returns it. Returns null in case the state does not exist.
 * @param {*} n Name (number) of the next state.
 * @returns The next state or null.
 */
Automata.prototype.getNewState = function (n) {
  for (const state of this.states) {
    if (state.name == n) {
      return state;
    }
  }
  return null;
};

//Procesa la palabra y retorna si es valida o no.
/**
 * Process the word and returns if the word is accepted or not.
 * @param {string} w Word to process.
 * @returns Acceptance.
 */
Automata.prototype.run = function (w) {
  this.results = [];
  let actualState = this.states[0];
  let newState = null;
  let accept = false;
  for (const c of w) {
    if (actualState != null) {
      newState = null;
      for (const t of actualState.transitions) {
        if (t[0] == c) {
          newState = this.getNewState(t[1]);
          break;
        }
      }
      if (newState != null) {
        this.results.push([actualState.name, c, newState.name, newState.accept]);
        actualState = newState;
        accept = actualState.accept;
        newState = null;
      } else {
        accept = false;
      }
    } else {
      break;
    }
  }
  return accept;
};

// Inicializa el automata.
// Automata finidto determinista (AFD) hecho para aceptar las matriculas de los estudiantes en el equipo y del maestro.
/**
 * Initiaizes the automata.
 * @returns Automata
 */
function initializeAutomata() {
  // matriculas
  // 1493342
  // 1526438
  // 1522188
  // 1600726
  // 1809779
  // 1861817
  // 1989963

  // Automata.
  let a = new Automata();

  // Estados. | States.
  let q0 = new State(0, false);
  let q1 = new State(1, false);
  let q2 = new State(2, false);
  let q3 = new State(3, false);
  let q4 = new State(4, false);
  let q5 = new State(5, false);
  let q6 = new State(6, false);
  let q7 = new State(7, false);
  let q8 = new State(8, false);
  let q9 = new State(9, false);
  let q10 = new State(10, false);
  let q11 = new State(11, false);
  let q12 = new State(12, false);
  let q13 = new State(13, false);
  let q14 = new State(14, false);
  let q15 = new State(15, false);
  let q16 = new State(16, false);
  let q17 = new State(17, false);
  let q18 = new State(18, false);
  let q19 = new State(19, false);
  let q20 = new State(20, false);
  let q21 = new State(21, false);
  let q22 = new State(22, false);
  let q23 = new State(23, false);
  let q24 = new State(24, false);
  let q25 = new State(25, false);
  let q26 = new State(26, false);
  let q27 = new State(27, false);
  let q28 = new State(28, false);
  let q29 = new State(29, false);
  let q30 = new State(30, false);
  let q31 = new State(31, false);
  let q32 = new State(32, false);
  let q33 = new State(33, false);
  let q34 = new State(34, true);
  let q35 = new State(35, false);
  let q36 = new State(36, false);
  let q37 = new State(37, false);
  let q38 = new State(38, false);
  let q39 = new State(39, false);
  let q40 = new State(40, false);
  let q41 = new State(41, false);
  let q42 = new State(42, false);
  let q43 = new State(43, false);
  let q44 = new State(44, false);


  // Transiciones (delta). | Transitions (delta function).
  q0.transitions = State.getTransitions([['1', 1]], 35);
  q1.transitions = State.getTransitions([['4', 2], ['5', 3], ['6', 4], ['8', 5], ['9', 6]], 36);
  q2.transitions = State.getTransitions([['9', 7]], 37);
  q3.transitions = State.getTransitions([['2', 8]], 38);
  q4.transitions = State.getTransitions([['0', 9]], 40);
  q5.transitions = State.getTransitions([['0', 10], ['6', 11]], 41);
  q6.transitions = State.getTransitions([['8', 12]], 43);
  q7.transitions = State.getTransitions([['3', 13]], 37);
  q8.transitions = State.getTransitions([['2', 14], ['6', 15]], 38);
  q9.transitions = State.getTransitions([['0', 16]], 40),
  q10.transitions = State.getTransitions([['9', 17]], 41);
  q11.transitions = State.getTransitions([['1', 18]], 42);
  q12.transitions = State.getTransitions([['9', 19]], 43);
  q13.transitions = State.getTransitions([['3', 20]], 37);
  q14.transitions = State.getTransitions([['1', 21]], 38);
  q15.transitions = State.getTransitions([['4', 22]], 39);
  q16.transitions = State.getTransitions([['7', 23]], 40);
  q17.transitions = State.getTransitions([['7', 24]], 41);
  q18.transitions = State.getTransitions([['8', 25]], 42);
  q19.transitions = State.getTransitions([['9', 26]], 43);
  q20.transitions = State.getTransitions([['4', 27]], 37);
  q21.transitions = State.getTransitions([['8', 28]], 38);
  q22.transitions = State.getTransitions([['3', 29]], 39);
  q23.transitions = State.getTransitions([['2', 30]], 40);
  q24.transitions = State.getTransitions([['7', 31]], 41);
  q25.transitions = State.getTransitions([['1', 32]], 42);
  q26.transitions = State.getTransitions([['6', 33]], 43);
  q27.transitions = State.getTransitions([['2', 34]], 37);
  q28.transitions = State.getTransitions([['8', 34]], 38);
  q29.transitions = State.getTransitions([['8', 34]], 39);
  q30.transitions = State.getTransitions([['6', 34]], 40);
  q31.transitions = State.getTransitions([['9', 34]], 41);
  q32.transitions = State.getTransitions([['7', 34]], 42);
  q33.transitions = State.getTransitions([['3', 34]], 43);

  q34.transitions = State.getTransitions([], 44);
  q35.transitions = State.getTransitions([], 35);
  q36.transitions = State.getTransitions([], 36);
  q37.transitions = State.getTransitions([], 37);
  q38.transitions = State.getTransitions([], 38);
  q39.transitions = State.getTransitions([], 39);
  q40.transitions = State.getTransitions([], 40);
  q41.transitions = State.getTransitions([], 41);
  q42.transitions = State.getTransitions([], 42);
  q43.transitions = State.getTransitions([], 43);
  q44.transitions = State.getTransitions([], 44);


  a.states = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, q41, q42, q43, q44];
  return a;
}