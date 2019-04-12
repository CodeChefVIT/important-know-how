// to build binary in the same folder run $ go build filename.go
// for running $ go run filename.go
// for building in bin $ go install projectDir

package main

import (
	"fmt"
	"net/http"
)

type myHandler struct {
	greeting string
}

func (mh myHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte(fmt.Sprintf("%s World", mh.greeting)))
}

func main() {
	// "/" matches the most nearest string

	http.Handle("/", &myHandler{greeting: "Hello there"}) // Handle uses ServeHTTP(handler) method of struct
	http.ListenAndServe(":3000", nil)                     // nil means http.DefaultServeMux
}
