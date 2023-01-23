# abstract-factory-group3

Ejercicio (Factory o Abstract Factory ?? )

Tenemos una empresa de Luces Led. Un Conjunto de luces led están gestionadas por una placa controladora que llamaremos Centro de Mando (CommandCenter). 
Tenemos dos tipos de CommandCenter: Smart o Citilux. 

Los Citilux tienen un módulo de gestión de diferencial que se llama RCDS y tiene un tipo de sensor de robo de cable llamado WireStealSensor
Los Smart tienen un módulo de gestión de diferencial que se llama DiffSensors y tiene un tipo de sensor de robo de cable llamado NoWireSensor


La aplicación cliente necesita CREAR Centros de Mando Smart o Citilux.

¿Cómo diseñaríais el sistema y lo implementarías para que la aplicación cliente pueda crear los diferentes Centros de Mando?
