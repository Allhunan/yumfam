# {{ .Site.Title }}
{{ with .Site.Params.description }}
{{ . }}{{ end }}

## Latest

{{ range first 30 .Site.RegularPages.ByDate.Reverse }}
- [{{ .Title }}]({{ .Permalink }}) — {{ .Date.Format "2006-01-02" }}
{{ end }}
