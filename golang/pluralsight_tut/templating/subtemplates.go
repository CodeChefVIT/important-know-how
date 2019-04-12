package main

import (
	"html/template"
	"log"
	"net/http"
)

func main() {
	templ := gentemp()
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		file := r.URL.Path[1:]
		t := templ.Lookup(file + ".html")
		if t != nil {
			err := templ.Execute(w, nil)
			if err != nil {
				log.Println(err)
			}
		} else {
			w.WriteHeader(http.StatusNotFound)
		}
	})
	http.Handle("/images/", http.FileServer(http.Dir("subtemplates_public")))
	http.Handle("/javascripts/", http.FileServer(http.Dir("subtemplates_public")))
	http.Handle("/stylesheets/", http.FileServer(http.Dir("subtemplates_public")))

	http.ListenAndServe(":3000", nil)
}

func gentemp() *template.Template {
	result := template.New("index.html")
	template.Must(result.ParseGlob("subtemplates_public/*.html"))
	return result
}
