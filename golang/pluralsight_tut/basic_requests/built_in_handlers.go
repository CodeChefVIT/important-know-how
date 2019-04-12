/*
	NotFoundHandler
	RedirectHandler
	StripPrefix
	TimeoutHandler
	FileServer
*/

package main

import (
	"net/http"
)

// without FileServer

/*
func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {

		f, err := os.Open("public" + r.URL.Path)
		var contentType string
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			log.Println(err)
		}
		if strings.HasSuffix(r.URL.Path, "css") {
			contentType = "text/css"
		}

		defer f.Close()
		w.Header().Add("Content-Type", contentType)
		io.Copy(w, f)
	})

	http.ListenAndServe(":3000", nil)
}
*/

//with FileServer
func main() {
	http.ListenAndServe(":3000", http.FileServer(http.Dir("public")))
}
