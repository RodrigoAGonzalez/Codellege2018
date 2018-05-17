<?php
    $pass = 'gatv1220';
    $conn = mysql_connect('sql109.epizy.com', 'epiz_21916081', $pass);

    if (!$conn) {
        die('Not connected : ' . mysql_error());
    }
    mysql_set_charset('UTF8', $conn);
	print( '{"Alumnos":[' );

    mysql_select_db( 'epiz_21916081_AlexInnov' );
    $sql = "";
    if( $_GET['id'])
    {
        $sql = 'SELECT * FROM Alumnos WHERE ID =' . $_GET['id'];
    }
    else
        $sql = "SELECT * FROM Alumnos";
    $result = mysql_query( $sql );
    $first = 0;

    if( mysql_num_rows( $result ) > 0 )
    {
        while( $row = mysql_fetch_assoc( $result ) )
        {
            print ($first > 0 ? ',' : '') . '{' . '"Nombre": ' . '"' . $row["Nombre"] . '",' . '"ApellidoP": ' . '"' . $row["ApellidoP"] . '",'
            . '"ApellidoM": ' . '"' . $row["ApellidoM"] . '",' . '"Sexo": ' . '"' . $row["Sexo"] . '",'
            . '"Edad": ' . '"' . $row["Edad"] . '"}';
            $first++;
        }
    }
    print( ']}' ); 
?>