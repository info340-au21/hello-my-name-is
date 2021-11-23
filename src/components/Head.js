import React from 'react';

export function GenerateHead() {
    return (
        <head>
            <meta charset="UTF-8" />
            <meta name="author" content="Yufei, Gracie, Maynard" />
            <meta name="description" content="Main page" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <title>Hello My Name Is</title>
            <link rel="icon" type="image/png" href="img/yellow.jpg" sizes="16x16" />
        
        
            <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

            <script
            src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
            crossorigin></script>

            <script
            src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin></script>

            <script>var Alert = ReactBootstrap.Alert;</script>
                    
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            
            <link rel="stylesheet" href="css/index.css"/>
        </head>
    )
}