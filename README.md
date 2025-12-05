# Boule_Extrem Project

## Overview
Boule_Extrem ist eine einfache Website, die Ergebnisse von Boule-Turnieren übersichtlich darstellt. Die Seite enthält eine Hauptseite und mehrere Unterseiten für Termine und Ergebnisse. Jede Seite hat ein Banner, und die Ergebnisse werden in Tabellen angezeigt, die dynamisch aus CSV-Dateien geladen werden.

## Project Structure
```text
Boule_Extrem
├── css
│ └── styles.css # Enthält die Styles für die Website
├── js
│ └── script.js # JavaScript zum Laden der CSV-Dateien
├── pages
│ ├── termine.html # Unterseite mit Turnier-Terminen
│ └── ergebnisse.html # Unterseite mit Turnier-Ergebnissen
├── data
│ ├── winterspiele-2025.csv
│ ├── weltmeisterschaft-2026.csv
│ ├── sommerspiele-2026.csv
│ └── kreismeisterschaft-2026.csv
├── index.html # Hauptseite der Website
└── README.md # Dokumentation für das Projekt
```
## Hosting on GitHub Pages
Um das Projekt auf GitHub Pages zu hosten, folge diesen Schritten:

1. Erstelle ein neues Repository auf GitHub.
2. Push deine lokalen Projektdateien in das Repository.
3. Gehe in die Repository-Einstellungen auf GitHub.
4. Scrolle zum Abschnitt "GitHub Pages".
5. Wähle den Branch aus, der veröffentlicht werden soll (normalerweise `main` oder `master`) und klicke auf "Save".
6. Deine Website wird veröffentlicht unter `https://<username>.github.io/<repository-name>/`.

## Features
- **Hauptseite (index.html)**: Enthält Links zu den Unterseiten und ein Banner.
- **Termine-Seite (pages/termine.html)**: Zeigt die Turnier-Termine mit Datum und Eventdetails.
- **Ergebnisse-Seite (pages/ergebnisse.html)**: Zeigt die Turnierergebnisse in Tabellen, die dynamisch aus CSV-Dateien geladen werden. Tabellen haben Zebra-Streifen und Hover-Effekte für Zellen.
- **CSV-Dateien**: Enthalten Platzierungen, Spieler und Punkte für jedes Turnier.

## Technologies Used
- HTML
- CSS
- JavaScript

## Acknowledgments
Danke an alle, die zum Projekt beigetragen haben, sowie an Ressourcen, die bei der Entwicklung geholfen haben.
