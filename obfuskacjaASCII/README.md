# Obfuskator HTML
## Kodowanie znaków

Metoda polega na zamianie znaków z kodu źródłowego HTML na kody znaków ASCII, a następnie wyświetlenie strony dzięki wykorzystaniu funkcji przeglądarki unescape(str) oraz document.write(str). Dzięki temu zamiast wysyłać użytkownikowi kod źródłowy z postaci HTML otrzymuje on kod javascript, którego zadaniem jest wyświetlenie strony. Cały HTML jest przedstawiony za pomocą jednego stringa zakodowanych znaków ASCII i wyświetlona przy pomocy wbudowanej funkcji przeglądarki unescape(str).

## Uruchomienie
Wystarczy uruchomić index.html w przeglądarce internetowej.

## Test
W repozytorium dołączony jest plik [test.html](test.html), który jest zobfuskowaną wersją [index.html](index.html). Uruchomienie go w przeglądarce da taki sam efekt jak uruchomienie głównego pliku.
