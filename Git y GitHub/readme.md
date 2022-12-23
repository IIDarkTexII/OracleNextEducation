# Git y GitHub

<h1> ¿Qué es Git? </h1>
<p> Git es un sistema de control de versiones que se utiliza ampliamente en el desarrollo de software y otras tareas de control de versiones. Es un sistema de control de versiones distribuido, lo que significa que almacena una copia de todo el repositorio (incluyendo todos los archivos y versiones anteriores de esos archivos) en el ordenador de cada desarrollador, en lugar de solo en un servidor central. Esto permite a los desarrolladores trabajar en sus propias copias del código y hacer commit de los cambios en sus repositorios locales, sin necesidad de comunicarse constantemente con un servidor central.</p>
<img src="https://git-scm.com/images/logo@2x.png" width="30%" height= "30%">

<h2> Comandos </h2>

<h4> git init </h4>
<p>Es un comando de Git que se utiliza para crear un nuevo repositorio de Git localment, al ejecutar git init, también se inicializa el sistema de control de versiones en el directorio actual, lo que significa que cualquier archivo que se agregue a ese directorio a partir de ese momento se puede controlar de forma rastreable utilizando Git. </p>

<h4> git status </h4>
<p> Es un comando de Git que muestra el estado actual de un repositorio de Git. Al ejecutar git status, Git te informa de los archivos que tienen cambios pendientes de commit, los archivos que están en seguimiento y los archivos que no están en seguimiento. También te informa de si hay ramas de trabajo sin fusionar y si hay cambios en el repositorio remoto que aún no se han descargado en tu repositorio local. </p>

<h4> git add </h4>
<p> git add es un comando de Git que se utiliza para agregar archivos al área de preparación (también conocida como el área de indexación) de un repositorio de Git. Cuando agregas un archivo al área de preparación, estás preparando el archivo para ser confirmado (committed) en el repositorio. Los archivos en el área de preparación se consideran "en seguimiento" y Git rastrea los cambios que se realicen en ellos. </p>

<h4> git commit </h4>
<p> git commit es un comando de Git que se utiliza para confirmar (commit) los cambios en un repositorio de Git, para utilizar git commit, primero debes agregar los archivos que deseas incluir en el commit al área de preparación utilizando el comando git add. Una vez que hayas agregado los archivos que deseas al área de preparación, puedes ejecutar git commit para confirmar los cambios, es importante tener en cuenta que el comando git commit solo confirma los cambios en tu repositorio local. Si estás trabajando con un repositorio remoto y deseas compartir tus cambios con otros desarrolladores, necesitarás utilizar el comando git push</p>

<h4> git push </h4>
<p>Es un comando de Git que se utiliza para enviar commits desde tu repositorio local a un repositorio remoto. Al ejecutar git push, Git envía tus commits al repositorio remoto y los fusiona con la rama de destino (que es la rama del repositorio remoto que se está actualizando).</p>

<h4> Borrar </h4>
<p>Con el 'git restore' deshacemos una modificación que aún no fue agregada al index o stage, o sea, antes de hacer git add. Después de agregar con git add, para deshacer una modificación, necesitamos sacarlo de este estado, con 'git restore --staged'. Ahora, si ya hicimos el commit, el comando 'git revert' puede salvarnos.</p>

<h1> ¿Qué es GitHub? </h1>
<p> GitHub es una plataforma en línea para alojar proyectos que utilizan el sistema de control de versiones Git. Ofrece una serie de herramientas y funcionalidades diseñadas para facilitar el trabajo en proyectos de código, como la posibilidad de realizar seguimiento de problemas y mejoras, hacer colaboración en tiempo real y hacer un seguimiento del historial de cambios en el código.</p>
<img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" width="30%" height= "30%">
