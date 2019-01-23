<?php 

$first = "Keagan";
$last = "Cheatwood";
$age = 27;
$full = $first ." ". $last;
echo "Hello World my name is $full and I am $age years young.\n";
$students_array = [
    "John" => ["JacobJingerHeimer", 100],
    "Humpty" => ["Dumpty", 1]
];

foreach($students_array as $student => $data) {
    $full_name = $student .' '. $data[0];
    echo "My name is $full_name.\n";
    if(strlen($full_name) >12)
    echo "It's a long name. \n";
    else "It's a short name. \n";
    $age = $data[1];
    echo "I'm $age years old.\n";
    if($age >21)
    echo "drink alll the boooze hack all the things.\n";
    else if ($age === 21)
    echo "drink some the booze, hack all the things.\n";
    else
    echo "hack all the things.\n";
};