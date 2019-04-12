package middleware

import (
	"context"
	"net/http"
	"time"
)

type TimeoutMiddleware struct {
	Next http.Handler
}

func (tm TimeoutMiddleware) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if tm.Next == nil {
		tm.Next = http.DefaultServeMux
	}
	ctx := r.Context()                               // pulling the current request context
	ctx, _ = context.WithTimeout(ctx, 3*time.Second) // adding a timeout context
	r.WithContext(ctx)                               // passing the modified context to the request

	// to see if the request has timed out or completed we will use goroutines and channels
	ch := make(chan struct{}) // make a channel
	go func() {
		tm.Next.ServeHTTP(w, r)
		ch <- struct{}{}
	}() // create and call a goroutine which returns to the channel when ServeHTTP is completed

	select {
	case <-ch: // if goroutine is serving on the channel then return
		return
	case <-ctx.Done(): // if Done of the context is being called then the request is timeout
		w.WriteHeader(http.StatusRequestTimeout)
	}
}

/**
@description

1. extracted the context from the request
2. added timeput functionality using the WithTimeout function from the context package
3. updated the request with the new context using WithContext function
4. Now to check if timeout passed or failed
5. Created a channel to listen upon
6. Created a goroutine which calles the ServeHTTP method and on response it passes data
onto our own channel
7. Using select case we judge if data is received o nour own channel or not, if yes then we return
8. If not we check if the Done method of the context has been invoked. if yes then we return a
timeout header by writing the status code on the response writer

**/
