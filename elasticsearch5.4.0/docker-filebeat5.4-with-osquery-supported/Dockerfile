FROM docker.elastic.co/beats/filebeat:5.4.0

COPY --chown=root:filebeat filebeat /usr/share/filebeat
USER root
RUN chmod -R go-w /usr/share/filebeat/module/osquery /usr/share/filebeat/filebeat.template.json
USER filebeat
