/*
	ParseFiles, ParseGlob, Lookup, Must
*/

package main

import (
	"html/template"
	"log"
	"net/http"
)

func main() {
	templates := populateTemplates()
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		reqFile := r.URL.Path[1:]
		t := templates.Lookup(reqFile + ".ejs")
		if t != nil {
			err := templates.Execute(w, nil)
			if err != nil {
				log.Fatalln(err)
			}
		} else {
			w.WriteHeader(http.StatusNotFound)
		}
	})
	http.Handle("/images/", http.FileServer(http.Dir("public")))
	http.Handle("/stylesheets/", http.FileServer(http.Dir("public")))
	http.Handle("/javascript/", http.FileServer(http.Dir("public")))
	http.ListenAndServe(":3000", nil)
}

func populateTemplates() *template.Template {
	result := template.New("index.ejs") // name of the template should be name of atleast 1 file
	const basePath = "views"
	template.Must(result.ParseGlob(basePath + "/*.ejs")) // Must throws a Fatal error if template not found
	// ParseGlob parses a pattern of templates
	return result
}
