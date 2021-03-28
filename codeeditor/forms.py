from django import forms
languages= [
    ('PYTHON3', 'PYTHON3'),
    ('CPP17', 'CPP17'),
    ('JAVA8', 'JAVA8'),
]
class CodeForm(forms.Form):
    code=forms.CharField(widget=forms.Textarea(attrs={"rows":20, "cols":80}))
    input=forms.CharField(widget=forms.Textarea(attrs={"rows":20, "cols":40}),required=False)
    language= forms.CharField(widget=forms.Select(choices=languages),required=False)