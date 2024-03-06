package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"time"
)

type Expense struct {
	Name     string    `json:"name"`
	Category string    `json:"category"`
	Value    float32   `json:"value"`
	Date     time.Time `json:"date"`
}

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "test")
	})

	mux.HandleFunc("/expense", func(w http.ResponseWriter, r *http.Request) {
		if r.Method == http.MethodPost {
			b, err := io.ReadAll(r.Body)

			if err != nil {
				log.Println(err)
				w.WriteHeader(500)
				fmt.Fprintf(w, "Internal server error")
				return
			}

			var exp Expense
			err = json.Unmarshal(b, &exp)
			if err != nil {
				log.Println(err)
				w.WriteHeader(500)
				fmt.Fprintf(w, "Internal server error")
				return
			}

			w.WriteHeader(http.StatusNoContent)
			log.Printf("%#v\n", exp)
		}
	})

	http.ListenAndServe(":8080", mux)
}
