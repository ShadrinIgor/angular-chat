Необходимо реализовать простенький групповой чат с разными комнатами. По типу IRC или jabber. У комнат хранится история и есть текущая тема.
Две роли пользователей: админы (заданы в конфиге, есть пароли) и остальные (указывают имя при первом входе).
И пользователи и админы могут писать в комнату, сообщения админов подсвечиваются красным. Также админы могут делать CUD комнат.  Никакого дополнительного функционала или крутой верстки не требуется.
Приложение должно быть реалтаймовым. При перезагрузке сервера соединения должны восстанавливаться. Статус онлайн пользователей должен отображаться.
Технологии: tornado, twitter bootstrap 3 или 4, angularjs 1, postgres.
Предварительно провести оценку и декомпозицию задачи. Если задача займет более 8 часов, то лучше не приниматься. Тогда просто предоставьте подробное описание, как бы вы реализовывали задачу.
После реализации указать затраты времени на каждый из этапов, сильные и слабые стороны конкретно вашей реализации.
