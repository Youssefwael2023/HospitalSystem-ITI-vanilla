// This script handles the display of doctors and the appointment form on the home page.
fetch("https://mocki.io/v1/87925baf-5f16-4b16-a1ae-8496951cbe51")
  .then((res) => res.json())
  .then((doctors) => {
    const row = document.getElementById("doctorsRow");
    doctors.forEach((doc) => {
      row.innerHTML += `
        <div class="col-md-3 col-lg-4 mb-4 pt-5">
          <div class="card h-100">
            <img src="${doc.image}" class="card-img-top" alt="${doc.name}" style="height: 400px;">
            <div class="card-body bgAccent fcPrimary  text-center">
              <h3 class="card-title">${doc.name}</h3>
              <h5 class="card-text">${doc.speciality}</h5>
              <p class="card-text">${doc.email}</p>
                <i style="border-radius: 50%; padding: 5px;" class="fa-brands fa-linkedin"></i>
                <i style="border-radius: 50%; padding: 5px;" class="fa-brands fa-facebook"></i>
                <i style="border-radius: 50%; padding: 5px;" class="fa-brands fa-instagram"></i>

              </div>
              <div class=" text-center p-3 bgPrimary"  style="color: #fff;width: 100%;">Contact</div>
          </div>
        </div>
      `;
    });
  });


// handling form submission
document.getElementById("appointmentForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      gender: form.gender.value,
      email: form.email.value,
      phone: form.phone.value,
      date: form.date.value,
      time: form.time.value,
      doctor: form.doctor.value,
      department: form.department.value,
      message: form.message.value,
    };
    localStorage.setItem("appointmentData", JSON.stringify(data));
    form.reset();
  });
