var a = initializeAutomata();
var nState = -1;
var playInterval = null;

/**
 * Loads the word in the automata and runs it.
 */
function load() {
  nState = -1;
  a.run(document.getElementById('text-control').value);
  document.querySelector('.status-display').innerText = 'q0';
  document.querySelector('.status-display').style.backgroundColor = 'unset';
  document.querySelector('.char-display').innerText = '';
}

/**
 * Searches the transition and selects it.
 * @param {string} transition Full transition text.
 */
function searchTransition(transition) {
  for (const stateE of document.querySelectorAll('td')) {
    if (stateE.innerText == transition) {
      stateE.classList.add('actual-state');
    } else {
      stateE.classList.remove('actual-state');
    }
  }
}

function goBackward () {
  if (nState > 0) {
    nState--;
    updateView();
  }
}

function play () {
  playInterval = setInterval(() => {
    goForward();
  }, 1000);
}

function goForward () {
  if (nState < a.results.length) {
    nState++;
    updateView();
  } else if (playInterval != null) {
    clearInterval(playInterval);
  }
}

function updateView() {
  searchTransition(`d(q${a.results[nState][0]}, ${a.results[nState][1]}) = q${a.results[nState][2]}`);
  document.querySelector('.char-display').innerText = a.results[nState][1] + ' -> ';
  document.querySelector('.status-display').innerText = `q${a.results[nState][2]}`;
  if ((nState + 1) == a.results.length) {
    document.querySelector('.status-display').style.backgroundColor = (a.results[nState][3]) ? 'green' : 'red';
  } else {
    document.querySelector('.status-display').style.backgroundColor = 'unset';
  }
}

function clickControl(ev) {
  ev.preventDefault();
  let aEl = ev.target;
  while (aEl.tagName != 'A') {
    aEl = aEl.parentElement;
  }
  if (aEl.id == 'backward') {
    goBackward();
  } else if (aEl.id == 'play') {
    play();
  } else if (aEl.id == 'forward') {
    goForward();
  }
}

document.onreadystatechange = function () {
  let t = [];
  document.querySelector('.delta-table tbody').innerHTML = '';
  for (const state of a.states) {
    for (const transition of state.transitions) {
      t.push([state.name, transition[0], transition[1]]);
    }
  }

  let tc = 0;
  for (let i = 0; i < 35; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
      let td = document.createElement('td');
      td.innerText = `d(q${t[tc][0]}, ${t[tc][1]}) = q${t[tc][2]}`;
      tr.append(td);
      tc++;
    }
    document.querySelector('.delta-table tbody').append(tr);
  }

  //document.querySelector('.col:nth-child(1) .automaton-state');
  for (const aElement of document.querySelectorAll('.controls a')) {
    aElement.addEventListener('click', clickControl)
  }
};