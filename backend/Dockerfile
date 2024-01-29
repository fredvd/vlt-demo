# syntax=docker/dockerfile:1
ARG PLONE_VERSION=6.0.9
FROM plone/server-builder:${PLONE_VERSION} as builder

WORKDIR /app

# Add local code
COPY . .

# Install local requirements and pre-compile mo files
RUN <<EOT
    set -e
    bin/pip install mxdev
    mv requirements-docker.txt requirements.txt
    sed -i 's/-e src\/vlt_demo\[test\]/src\/vlt_demo/g' mx.ini
    bin/mxdev -c mx.ini
    bin/pip install -r requirements-mxdev.txt
    bin/python /compile_mo.py
    rm -Rf src/
EOT

FROM plone/server-prod-config:${PLONE_VERSION}

LABEL maintainer="Fred van Dijk <fred@plone.org>" \
      org.label-schema.name="vlt-demo-backend" \
      org.label-schema.description="vlt-demo backend image." \
      org.label-schema.vendor="Fred van Dijk"

# Copy /app from builder
COPY --from=builder /app /app

RUN <<EOT
    set -e
    ln -s /data /app/var
EOT
