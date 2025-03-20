"use strict"
document.addEventListener("DOMContentLoaded", function () {
    const apkLink = document.querySelector("#apk-download");

    if (apkLink) {
        apkLink.addEventListener("click", function (event) {
            event.preventDefault(); // Предотвращаем стандартное поведение ссылки
            fetch(apkLink.href)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Ошибка сети при попытке загрузить файл.');
                    }
                    return response.blob();
                })
                .then(blob => {
                    const downloadUrl = URL.createObjectURL(blob);
                    const a = document.createElement("a");
                    a.href = downloadUrl;
                    a.download = "rastarasha_2_5_4_v9.apk";
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                    URL.revokeObjectURL(downloadUrl);
                })
                .catch(error => console.error("Ошибка при загрузке APK:", error));
        });
    }
});
