<?php
/*
1493342
1522188
1600726
1809779
1861817
1989963

1 4 9 3 3 4 2
1 5 2 2 1 8 8
1 6 0 0 7 2 6
1 8 0 9 7 7 9
1 8 6 1 8 1 7
1 9 8 9 9 6 3
*/
class State
{
  public $Number;
  public $Transitions;
  public $Accept;
  
  public function __construct($n, $a)
  {
    $this->Number = $n;
    $this->Accept = $a;
  }
}

class Transition
{
  public $Input;
  public $Output;
  
  public function __construct($i, $o)
  {
    $this->Input = $i;
    $this->Output = $o;
  }
}

class Automata
{
  public $States = array();
  
  private function getNewState($sn)
  {
    foreach ($this->States as $state) {
      if ($state->Number == $sn) {
        return $state;
      }
    }
    return null;
  }
  
  public function run($w)
  {
    $actualState = $this->States[0];
    $accept = $actualState->Accept;
    var_dump($actualState->Number);
    foreach (str_split($w) as $c) {
      if ($actualState != null) {
        $newState = null;
        foreach ($actualState->Transitions as $transition) {
          if ($transition->Input == $c) {
            $newState = $this->getNewState($transition->Output);
            var_dump($newState->Number);
            break;
          }
        }
        if ($newState != null) {
          $actualState = $newState;
          $accept = $actualState->Accept;
          $newState = null;
        } else {
          $accept = false;
        }
      } else {
        break;
      }
    }
    return $accept;
  }
}

$a = new Automata();
$q0  = new State(0, false);
$q1  = new State(1, false);
$q2  = new State(2, false);
$q3  = new State(3, false);
$q4  = new State(4, false);
$q5  = new State(5, false);
$q6  = new State(6, false);
$q7  = new State(7, false);
$q8  = new State(8, false);
$q9  = new State(9, false);
$q10 = new State(10, false);
$q11 = new State(11, false);
$q12 = new State(12, false);
$q13 = new State(13, false);
$q14 = new State(14, false);
$q15 = new State(15, false);
$q16 = new State(16, false);
$q17 = new State(17, false);
$q18 = new State(18, false);
$q19 = new State(19, false);
$q20 = new State(20, false);
$q21 = new State(21, false);
$q22 = new State(22, false);
$q23 = new State(23, false);
$q24 = new State(24, false);
$q25 = new State(25, false);
$q26 = new State(26, false);
$q27 = new State(27, false);
$q28 = new State(28, false);
$q29 = new State(29, false);
$q30 = new State(30, false);
$q31 = new State(31, true);

$q0->Transitions = array(new Transition('1', 1));
$q1->Transitions = array(new Transition('4', 2), new Transition('5', 3), new Transition('6', 4) ,new Transition('8', 5), new Transition('9', 6));
$q2->Transitions = array(new Transition('9', 7));
$q3->Transitions = array(new Transition('2', 8));
$q4->Transitions = array(new Transition('0', 9));
$q5->Transitions = array(new Transition('0', 10), new Transition('6', 11));
$q6->Transitions = array(new Transition('8', 12));
$q7->Transitions = array(new Transition('3', 13));
$q8->Transitions = array(new Transition('2', 14));
$q9->Transitions = array(new Transition('0', 15));
$q10->Transitions = array(new Transition('9', 16));
$q11->Transitions = array(new Transition('1', 17));
$q12->Transitions = array(new Transition('9', 18));
$q13->Transitions = array(new Transition('3', 19));
$q14->Transitions = array(new Transition('1', 20));
$q15->Transitions = array(new Transition('7', 21));
$q16->Transitions = array(new Transition('7', 22));
$q17->Transitions = array(new Transition('8', 23));
$q18->Transitions = array(new Transition('9', 24));
$q19->Transitions = array(new Transition('4', 25));
$q20->Transitions = array(new Transition('8', 26));
$q21->Transitions = array(new Transition('2', 27));
$q22->Transitions = array(new Transition('7', 28));
$q23->Transitions = array(new Transition('1', 29));
$q24->Transitions = array(new Transition('6', 30));
$q25->Transitions = array(new Transition('2', 31));
$q26->Transitions = array(new Transition('8', 31));
$q27->Transitions = array(new Transition('6', 31));
$q28->Transitions = array(new Transition('9', 31));
$q29->Transitions = array(new Transition('7', 31));
$q30->Transitions = array(new Transition('3', 31));

$a->States = array($q0,$q1,$q2,$q3,$q4,$q5,$q6,$q7,$q8,$q9,$q10,$q11,$q12,$q13,$q14,$q15,$q16,$q17,$q18,$q19,$q20,$q21,$q22,$q23,$q24,$q25,$q26,$q27,$q28,$q29,$q30,$q31,$q32);


$matricula = '1600726';
var_dump($a->run($matricula));

?>