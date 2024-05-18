---
title: Writing formal german letters on Overleaf
description: <Description of the page used for link previews>
date: 2024-05-17
publishDate: 2024-05-17
updated: 2024-05-18
draft: false
tags:
  - note
  - latex
  - german
---
 
This is my workflow for writing german letters with LaTEX on [Overleaf](https://overleaf.com). It's based on the template [German Modern Formal Letter](https://de.overleaf.com/latex/templates/german-modern-formal-letter/gbxkhhdbmgbc).

![[Pasted image 20240518194458.png]]

It requires three files, `Absender.lco` (containing the sender's information),  `main.tex` (the letter's content) and `Briefvorlage.lco` (defining the layout).

```lco title="Absender.lco"
\ProvidesFile{sender.lco}
%
\newcommand{\mFirstname}{Max}
\newcommand{\mLastname}{Mustermann}
\newcommand{\mStreet}{Beispielweg~23\,a}
\newcommand{\mPostalcode}{12345}
\newcommand{\mCity}{Köln}
\newcommand{\mPhone}{+49~123~5279143}
\newcommand{\mEmail}{max@mustermann.de}
```

```tex title="main.tex"
\documentclass[version=last, Briefvorlage]{scrlttr2}
%
\setkomavar{subject}{Beispiel der neuen LaTeX-Briefvorlage}
%
\begin{document}
%
\begin{letter}{%
		Erika Mustermann\\
		Rheinische Straße 1\\
		12345 Dortmund%
	}
	%
	\opening{Sehr geehrte Damen und Herren,}
	%
	Lorem Ipsum 1
	
	Lorem Ipsum 2
	
	Lorem Ipsum 3
	%
	\closing{Freundliche Grüße}
	%
\end{letter}
%
\end{document}
```

```lco title="Briefvorlage.lco"
\ProvidesFile{Briefvorlage.lco}[2017/11/01 German letter class options for scrlttr2 (Jan Mattfeld)]

\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[ngerman]{babel}

%---------------------------------------------------------------------------
% Font and Typefaces
%---------------------------------------------------------------------------
\usepackage[default, light, semibold]{sourcesanspro}

\DeclareRobustCommand\ebseries{\fontseries{eb}\selectfont}
\DeclareRobustCommand\sbseries{\fontseries{sb}\selectfont}
\DeclareRobustCommand\ltseries{\fontseries{l}\selectfont}
\DeclareRobustCommand\clseries{\fontseries{cl}\selectfont}

\DeclareTextFontCommand{\texteb}{\ebseries}
\DeclareTextFontCommand{\textsb}{\sbseries}
\DeclareTextFontCommand{\textlt}{\ltseries}
\DeclareTextFontCommand{\textcl}{\clseries}

\usepackage{ragged2e}
%\RaggedRight{}            	% Flattersatz   -> removed

\linespread{1.125}           % Zeilenabstand
\usepackage{microtype}    	% Kleinere Schriftsatzoptimierungen, vollständig nur mit pdfLaTeX
\usepackage{ellipsis}       % Leerraumoptimierung
\usepackage{xcolor}         % Farben für eigenes Layout
\usepackage{marvosym}       % Icons für eigenes Layout

%---------------------------------------------------------------------------
% Layout
%---------------------------------------------------------------------------
\KOMAoptions{
enlargefirstpage=true,
DIV=calc,           % Optimiert Verhältnis zwischen Text und Whitespace mit DIV=calc, A4 default=10
fontsize=12,        % 12 ist scrlttr2-Standard
parskip=half,       % Absätze mit Leerzeile ohne Einrückung
backaddress=plain,  % Rücksendeadresse nicht unterstrichen
foldmarks=off		% Keine Faltmarken
}

%---------------------------------------------------------------------------
% Sender Information
%---------------------------------------------------------------------------
\LoadLetterOption{Absender}						% Loads sender info from external file sender.lco

%
% Sender, generated from external data
%
\setkomavar{fromname}{\mFirstname{}~\mLastname{}}               % Name
\setkomavar{fromaddress}{\mStreet{}\\{}\mPostalcode{}~\mCity{}} % Adresse
\setkomavar{fromphone}{\mPhone{}}                           	% Telefonnummer
\setkomavar{fromemail}{\mEmail{}}                            	% E-Mail-Adresse
\setkomavar{place}{\mCity{}}                                 	% Ort
\setkomavar{backaddressseparator}{,~}                        	% Trennung der Rücksendeadressbestandteile statt ","
\setkomavar{signature}{}										% Removes Name after closing

\renewcommand*{\raggedsignature}{\raggedright}  % Signatur wird bündig gesetzt
\@setplength{sigbeforevskip}{0em}           	% Keine Leerzeile zwischen Gruß und Signature


%---------------------------------------------------------------------------
% Colors inspired by moderncv
%---------------------------------------------------------------------------
\definecolor{color0}{rgb}{0,0,0}             % Schwarz (normale Schrift)
\definecolor{color2}{rgb}{0.45,0.45,0.45}    % Dunkles Grau (zum Abheben)

%---------------------------------------------------------------------------
% Custom Letter Head
%---------------------------------------------------------------------------
\setkomavar{firsthead}{
\begin{flushright}
{\Huge%
\textsb{%
\color{color2!50}\mFirstname{}~\color{color2}\mLastname{}%
}}\\\vspace{0.1cm}%
{
\color{color2}\mStreet{}~|~\mPostalcode{}~\mCity{}%
}
\end{flushright}
}
%
\setkomavar{location}{
\begin{flushright}

\color{color0}
\@ifundefined{mKundennummer}{}{Kundennr.\,:~\mKundennummer{}\\}%
\@ifundefined{mVertragsnummer}{}{Vertrag:~\mVertragsnummer{}\\}%
\@ifundefined{mRechnungsnummer}{}{Rechnungs-Nr.\,:~\mRechnungsnummer{}\\}%
\@ifundefined{mKontonummer}{}{Kontonr.\,:~\mKontonummer{}\\}%

\end{flushright}
}
%
\setkomavar{firstfoot}{
\vspace{-1cm}%
\begin{flushright}%
\color{color2}%
\@ifundefined{mPhone}{}{\Mobilefone~\mPhone{}}%
\@ifundefined{mEmail}{}{~|~\Letter~\mEmail{}}%
\end{flushright}%
}

%---------------------------------------------------------------------------
% PDF Metadata
%---------------------------------------------------------------------------
\usepackage{hyperref}

% Prevent pdfTeX from writing PDF Default Metadata like a Banner
% See https://tex.stackexchange.com/a/313605
% \pdfinfoomitdate=1
% \pdftrailerid{}
% \pdfsuppressptexinfo=-1

\AtBeginLetter{{

	\usekomavar[\def\pdfAuthor]{fromname}
	\usekomavar[\def\pdfSubject]{subject}

	\hypersetup{
		pdftitle	= {Brief},
		pdfauthor   = {\pdfAuthor},
		pdfsubject	= {\pdfSubject},
		pdfkeywords = {%
			\@ifundefined{mKundennummer}{}{Kundennr.\,:~\mKundennummer{}~}%
			\@ifundefined{mVertragsnummer}{}{Vertrag:~\mVertragsnummer{}~}%
			\@ifundefined{mRechnungsnummer}{}{Rechnungs-Nr.\,:~\mRechnungsnummer{}~}%
			\@ifundefined{mKontonummer}{}{Kontonr.\,:~\mKontonummer{}~}}
% 		pdfcreator	= {LaTeX},
% 		pdfproducer	= {LaTeX}
	}
}}

```