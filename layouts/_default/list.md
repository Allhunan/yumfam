# {{ .Title }}

- URL: {{ .Permalink }}

{{ range .Pages }}
- [{{ .Title }}]({{ .Permalink }}){{ with .Date }} — {{ .Format "2006-01-02" }}{{ end }}
{{ end }}
