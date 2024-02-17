FROM mcr.microsoft.com/devcontainers/base:jammy

# https://www.postgresql.org/download/linux/ubuntu/
# RUN echo "deb https://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list
# RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -

# https://cloud.google.com/blog/products/containers-kubernetes/kubectl-auth-changes-in-gke
# https://cloud.google.com/sdk/docs/install#deb
# RUN curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg
# RUN echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

# Install Packages
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends \
#     libpq-dev \
#     postgresql-client-13 \
#     postgresql-server-dev-13
# google-cloud-sdk-gke-gcloud-auth-plugin
