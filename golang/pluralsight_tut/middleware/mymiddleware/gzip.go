// gzip compression middleware to compress requests and responses

package middleware

import (
	"compress/gzip"
	"io"
	"net/http"
	"strings"
)

type Gzipcompression struct {
	Next http.Handler
}

func (g *Gzipcompression) ServeHTTP(w http.ResponseWriter, r *http.Request) {

	// if there is no next middleware then assign DefaultServeMux
	if g.Next == nil {
		g.Next = http.DefaultServeMux
	}

	encodings := r.Header.Get("Accept-Encoding")

	// if Header cannot accept gzip then proceed without doing anything
	if !strings.Contains(encodings, "gzip") {
		g.Next.ServeHTTP(w, r)
		return
	}

	w.Header().Add("Content-Encoding", "gzip") // add an encoding type header for gzip

	gzipwriter := gzip.NewWriter(w) // wrap the respionse writer with the gzip writer
	defer gzipwriter.Close()

	grw := gzipResponsewWriter{
		ResponseWriter: w,
		Writer:         gzipwriter}

	g.Next.ServeHTTP(grw, r)

}

// creating a gzipwriter interface to pass on the response writer to the next middlewar
type gzipResponsewWriter struct {
	http.ResponseWriter
	io.Writer
}

// overwriting the Write function of the response writer
func (grw gzipResponsewWriter) Write(data []byte) (int, error) {
	return grw.Writer.Write(data)
}

// explanantion
/**

1. Create a type with HTTP Handler interface
2. Give the handler interface the ServeHTTP function taking the respoinse writer and request pointer
3. if next middleware is nil then set it to DefaultServeMux
4. Check the request Headers to see if they have gzip in their accept encoding
5. If they don't then call the Next's ServeHTTP function
6. If they do then Add a response header with the Content_Encoding gzip header
7. Create a gzip writer and wrap it around the response writer
8. Overwrite the Writer function of the response writer and pass the gzipwriter to the ServeHTTP of the Next

**/
