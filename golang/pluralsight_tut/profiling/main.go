package main

import (
	"net/http"
	_ "net/http/pprof" // performance profiling anonymous import
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Hello world"))
	})
	go http.ListenAndServe(":8080", nil)
	http.ListenAndServe(":3000", nil)
}

/**

website http://localhost:3000/debug/pprof

command line:

1. Memory: go tool pprof http://localhost:3000/debug/pprof/heap
2. CPU: go tool pprof http://localhost:3000/debug/pprof/profile
3. goroutines: go tool pprof http://localhost:3000/debug/pprof/block
4. trace: go tool pprof http://localhost:3000/debug/pprof/trace?seconds=5


Note: For png snapshot download the `graphviz` tool and in the pprof mode, type png

Note: All test files should be like this: hello_test.go, hi_test.go

**/
