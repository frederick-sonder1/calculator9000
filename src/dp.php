<?php
class  Save
{
    public function __construct()
    {
        $host = "localhost";
        $db_name = "calculator9000";
        $username = "root";
        $password = "";
        $conn = null;

        try {
            $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (PDOException $exception) {
            echo "Connection error: " . $exception->getMessage();
        }
    }

    // public function save($request){
    //     $host = "localhost";
    //     $db_name = "calculator9000";
    //     $username = "root";
    //     $password = "";
    //     $conn = null;

    //     $request = "INSERT INTO `resultats`( `resultat`) VALUES ('?')";

    //     $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    //         $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //         $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    //     $stmt = $conn->prepare($request);
    //     $stmt-> execute();

    // }

    public function saved()
    {
        $host = "localhost";
        $db_name = "calculator9000";
        $username = "root";
        $password = "";
        $conn = null;

        $request = "SELECT * FROM `resultats`";
        $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $stmt = $conn->prepare($request);
        $stmt->execute();
        $result = $stmt->fetchAll();

        echo json_encode($result);
    }    
}
$res = new Save();
$res->saved();