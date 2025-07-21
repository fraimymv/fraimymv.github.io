# Ejemplos de Test Automatizados en Postman


```JSON

let jsonData = pm.response.json();

// Validar que haya un contacto minimo
pm.test("Hay al menos un contacto", function () {
    pm.expect(jsonData.length).to.be.above(0);
});

//Verificación First/Lastname
pm.test("Todos los nombres y apellidos están correctamente capitalizados", function () {
    jsonData.forEach(contact => {

        // Firtsname
        pm.expect(contact.firstName).to.match(/^[A-Z][a-z]*$/, `Nombre incorrecto: ${contact.firstName}`);

        // Lastname
        pm.expect(contact.lastName).to.match(/^[A-Z][a-z]*$/, `Apellido incorrecto: ${contact.lastName}`);
    });
});
```

---

```JSON

let jsonData = pm.response.json();

jsonData.forEach((contact, index) => {
    const email = contact.email || "sin email";
    const phone = contact.phone || "sin teléfono";
    const contactoID = contact._id || `Contacto #${index + 1}`;

    // Validar correo
    const emailValido = /@gmail\.com$|@mail\.com$|@hotmail\.com|@outlook\.com/.test(email);
    pm.test(`${contactoID} - Validar email (${email})`, function () {
        pm.expect(emailValido, `Email inválido: ${email} → Debe terminar en @gmail.com o @mail.com`).to.be.true;
    });

    // Validar teléfono
    const telefonoValido = /^8/.test(phone);
    pm.test(`${contactoID} - Validar teléfono (${phone})`, function () {
        pm.expect(telefonoValido, `Teléfono inválido: ${phone} → Debe comenzar con 8`).to.be.true;
    });
});
```
