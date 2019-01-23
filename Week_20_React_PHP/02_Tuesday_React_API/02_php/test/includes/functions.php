<?php
class Person {
    private $firstName = "keagan";
    protected $lastName = "cheatwood";
    public function setFirstName($name) {
        $this->firstName =$name;
    }
    public function fullName() {
        return $this->firstName .' '. $this->lastName;
    }
};
class Customer extends Person {
    protected $salary = 42000;
    public function sayHello() {
        echo "<h1>Hello my name is ". $this->fullName() . " I make $this->salary annually.</h1>";
    }
};
function h1Wrap($text) {
    return "<h1>$text</h1>";
};