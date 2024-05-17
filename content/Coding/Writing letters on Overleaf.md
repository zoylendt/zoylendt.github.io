---
title: 
description: <Description of the page used for link previews>
date: 2024-05-17
publishDate: 2024-05-17
updated: 2024-05-17
draft: false
tags:
  - note
  - latex
---
 
This is my workflow for writing german letters with LaTEX on [Overleaf](https://overleaf.com). It's based on the template [German Modern Formal Letter](https://de.overleaf.com/latex/templates/german-modern-formal-letter/gbxkhhdbmgbc).

<img src="https://writelatex.s3.amazonaws.com/published_ver/6956.jpeg?X-Amz-Expires=14400&amp;X-Amz-Date=20240517T201634Z&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAWJBOALPNFPV7PVH5/20240517/us-east-1/s3/aws4_request&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=a96bd74ef1de89ee5bd828bd4d52ca8e4416f28bbf89b66ab2bdffdee300bb4b" alt="German Modern Formal Letter">

It requires three files, `Absender.lco` (containing the sender's information),  `main.tex` (the letter's content) and `Briefvorlage.lco` (defining the layout).

```lco title="Absender.lco"
\ProvidesFile{sender.lco}
%
\newcommand{\mFirstname}{Max}
\newcommand{\mLastname}{Mustermann}
\newcommand{\mStreet}{Hauptstraße 1} % original: Weg~323\,a = Weg 23a
\newcommand{\mPostalcode}{12345}
\newcommand{\mCity}{Berlin}
\newcommand{\mPhone}{+49~176~12345678}
\newcommand{\mEmail}{max.mustermann@gmail.ch}
```

```tex title="main.tex"
\documentclass[version=last, Briefvorlage]{scrlttr2}
\usepackage[ngerman]{babel}
%
\setkomavar{subject}{Briefthema}
%
\begin{document}
%
\begin{letter}{%
		Bob Mustermann\\
		Hauptstraße 2\\
		12345 Berlin%
	}
	%
	\opening{Sehr geehrter Herr Mustermann,}
	%
	...
 
	\closing{Mit freundlichen Grüßen,}
    Max \& Moritz Mustermann
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