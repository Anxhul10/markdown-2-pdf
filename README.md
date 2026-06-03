# Markdown to PDF

A simple web app that converts Markdown text into a PDF document.

Paste your Markdown, click **Convert to PDF**, and download the generated PDF instantly.

## Why?

There are existing tools such as https://www.markdowntopdf.com/ that provide similar functionality. This project was built as a free and lightweight alternative that allows anyone to convert Markdown to PDF without subscriptions, usage limits, or additional costs.

## How it works

The user submits Markdown content through the web interface. The backend converts the Markdown into a PDF and returns it as a downloadable file.

Most of the heavy lifting is handled by the excellent `md-to-pdf` npm package, which takes care of rendering Markdown and generating the final PDF document.

## Problem it solves

Markdown is widely used for documentation, notes, README files, and technical writing. However, sharing or printing Markdown files is not always convenient.

This tool makes it easy to:

* Convert Markdown into a portable PDF document
* Share formatted documents with others
* Export notes, documentation, and reports for offline use
* Generate PDFs without installing additional software

## Tech Stack

* Next.js
* Express.js
* md-to-pdf
